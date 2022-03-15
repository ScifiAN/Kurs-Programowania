const User = require('../models/user');
const authUtil = require('../util/authentication');

function getSignUp(req, res) {
    res.render('customer/auth/signup');
}

async function signup(req, res, next){
    const newUser = new User(
        req.body.email, 
        req.body.password, 
        req.body.username, 
        req.body.address, 
        req.body.postal, 
        req.body.city
    );

    try{
        await newUser.signup();
    } catch(error){
        return next(error);
    }
    
    res.redirect('/login');
};

function getLogIn(req, res) {
    res.render('customer/auth/login');
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

    if (!existingUser){
        res.redirect('/login');
        return;
    }

    const passwordIsCorrect = await user.comparePassword(existingUser.password);

    if(!passwordIsCorrect){
        res.redirect('/login');
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