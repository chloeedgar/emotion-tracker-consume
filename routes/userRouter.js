const express = require('express');
const userController = require('../controllers/userController.js');
const { truncate } = require('fs/promises');
const userRouter = express.Router();

// GET route for signin form
userRouter.get('/signin', (req, res) => {
    res.render('signin', {isAuthenticated: res.locals.isAuthenticated}); 
});

// GET route for signup form
userRouter.get('/signup', (req, res) => {
    res.render('signup', {isAuthenticated: res.locals.isAuthenticated}); 
});

module.exports = userRouter;