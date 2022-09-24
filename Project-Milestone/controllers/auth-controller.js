const User = require('../models/user');
const authUtil = require('../util/authentication');
const validation = require('../util/validation');
const sessionFlash = require('../util/session-flash');

function getSignUp(req, res) {
    let sessionData = sessionFlash.getSessionData(req);

    if(!sessionData){
        sessionData = {
            email: '', 
            confirmEmail: '',
            password: '', 
            username: '', 
            address: '', 
            postal: '', 
            city: ''
        };
    }
    res.render('customer/auth/signup', { inputData: sessionData });
}

async function signup(req, res, next){   
    const enteredData = {
        email: req.body.email,
        confirmEmail: req.body['confirm-email'],
        password: req.body.password, 
        username: req.body.username, 
        address: req.body.address, 
        postal: req.body.postal, 
        city: req.body.city
    };

    if (!validation.userDetailsAreValid(
        req.body.email, 
        req.body.password, 
        req.body.username, 
        req.body.address, 
        req.body.postal, 
        req.body.city
        ) 
        || !validation.confirmEmail(req.body.email, req.body['confirm-email'])
    ){
        sessionFlash.flashDataToSession(req, {
            errorMessage:'Please check your input. Password must be at least 6 characters long, postal code must be 5 characters long.',
            ...enteredData,
        }, 
        function(){
            res.redirect('/signup');
        })        
        return;
    }

    const user = new User(
        req.body.email, 
        req.body.password, 
        req.body.username, 
        req.body.address, 
        req.body.postal, 
        req.body.city
    );

    try{
        const existsAlready = await user.existAlready();

        if (existsAlready){
            sessionFlash.flashDataToSession(req, {
                errorMessage: 'User exist already.',
                ...enteredData,
            }, function(){
                res.redirect('/signup');
            });           
            return;
        }

        await user.signup();
    } catch(error){
        return next(error);
    }
    
    res.redirect('/login');
};

function getLogIn(req, res) {
    let sessionData = sessionFlash.getSessionData(req);

    if(!sessionData){
        sessionData = {
            email: '', 
            password: '',
        };
    }
    res.render('customer/auth/login', { inputData: sessionData });
}

async function login (req, res, next){
    const user = new User(req.body.email, req.body.password);
    let existingUser

    try {
        existingUser = await user.getUserWithSameEmail();
    } catch(error){
        next(error);
        return
    }

    const sessionErrorData = {
        errorMessage: 'User do not exist or invalid credentials. Please check your input.',
        email: user.email,
        password: user.password
    };

    if (!existingUser){
        sessionFlash.flashDataToSession(req, sessionErrorData, function(){
            res.redirect('/login');
        })        
        return;
    }

    const passwordIsCorrect = await user.comparePassword(existingUser.password);

    if(!passwordIsCorrect){
        sessionFlash.flashDataToSession(req, sessionErrorData, function(){
        res.redirect('/login');
        })  
        return;
    }

    authUtil.createUserSession(req, existingUser, function(){
        res.redirect('/');
    });
}

function logOut (req, res){
    authUtil.destroyUserAuthSession(req);
    res.redirect('/login');
}

module.exports = {
    getSignUp: getSignUp,
    getLogIn: getLogIn,
    signup:signup,
    login:login,
    logOut: logOut
};