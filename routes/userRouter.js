const express = require('express');
const userRouter = express.Router();

// GET route for home page 
userRouter.get('/', (req, res) => {
    res.render('home');
});

// GET route for signin form
userRouter.get('/signin', (req, res) => {
    res.render('signin'); 
});

// GET route for signup form
userRouter.get('/signup', (req, res) => {
    res.render('signup');
});


module.exports = userRouter;