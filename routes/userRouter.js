const express = require('express');
const { truncate } = require('fs/promises');
const userRouter = express.Router();

// GET route for signin form
userRouter.get('/signin', (req, res) => {
    res.render('signin', { isAuthenticated: (req.session.isAuthenticated || false) }); 
});

// GET route for signup form
userRouter.get('/signup', (req, res) => {
    // Retrieve isAuthenticated value from session
    const isAuthenticated = req.session.isAuthenticated || false;

    // Render the signup page and pass isAuthenticated to the template
    res.render('signup', { isAuthenticated: isAuthenticated });
});


// GET route for signup form
userRouter.get('/', (req, res) => {
    // Retrieve isAuthenticated value from session
    const isAuthenticated = req.session.isAuthenticated || false;

    // Render the signup page and pass isAuthenticated to the template
    res.render('home', { isAuthenticated: isAuthenticated });
});


module.exports = userRouter;