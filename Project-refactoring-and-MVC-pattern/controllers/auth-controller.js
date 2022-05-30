const validationSession = require('../util/validation-session');
const validation = require('../util/validation');
const User = require('../models/user');

function get401(req, res){
    res.status(401).render('401');
}

function getSignUp (req, res) {
    const sessionErrorData = validationSession.getSessionErrorData(req, {
        email: '',
        confirmEmail: '',
        password: ''
    });
    
    res.render('signup', {
        inputData: sessionErrorData
    });
}

function getLogIn (req, res){
    sessionErrorData = validationSession.getSessionErrorData(req, {
        email: "",
        password: ''
    });
    
    res.render('login', {
        inputData: sessionErrorData
    });
}

async function signup(req, res) {
    const userData = req.body;
    const enteredEmail = userData.email; // userData['email']
    const enteredConfirmEmail = userData['confirm-email'];
    const enteredPassword = userData.password;
  
    if (!validation.userCredentialsAreValid(enteredEmail,enteredConfirmEmail,enteredPassword)) {
          validationSession.flashErrorsToSession(
          req, {
              message: 'Invalid input - please check your data.',
              email: enteredEmail,
              confirmEmail: enteredConfirmEmail,
              password: enteredPassword,
          }, function(){
              res.redirect('/signup');
          });
        return;
    }

    const newUser = new User(enteredEmail, enteredPassword);
    const userExistsAlready = await newUser.existAlready();
  
    if (userExistsAlready) {
        validationSession.flashErrorsToSession(
        req,
        {
        message: 'User exists already!',
        email: enteredEmail,
        confirmEmail: enteredConfirmEmail,
        password: enteredPassword,
        },
        function () {
            res.redirect('/signup');
        }
        );
        return;
    }

    await newUser.signup();
  
    res.redirect('/login');
};

async function logIn(req, res) {
    const userData = req.body;
    const enteredEmail = userData.email;
    const enteredPassword = userData.password;

    const newUser = new User(enteredEmail, enteredPassword);
    const existingUser = await newUser.getUserWithSameEmail();
    
    if (!existingUser){
        validationSession.flashErrorsToSession(
        req,
        {
        message: 'Could not log you in - please check your credentials!',
        email: enteredEmail,
        password: enteredPassword,
        },
        function () {
        res.redirect('/login');
        }
        );
      return;
    }
  
    const success = await newUser.login(existingUser.password);
  
    if (!success) {
        validationSession.flashErrorsToSession(
        req,
        {
        message: 'Could not log you in - please check your credentials!',
        email: enteredEmail,
        password: enteredPassword,
        },
        function () {
        res.redirect('/login');
        }
        );
      return;
    }
  
    req.session.user = { id: existingUser._id, email: existingUser.email };
    req.session.isAuthenticated = true;
    req.session.save(function () {
      res.redirect('/admin');
    });
}

function logOut(req, res) {
    req.session.user = null;
    req.session.isAuthenticated = false;
    res.redirect('/');
  }

module.exports = {
    get401: get401,
    getSignUp: getSignUp,
    getLogIn: getLogIn,
    signup:signup,
    logIn:logIn,
    logOut:logOut
}