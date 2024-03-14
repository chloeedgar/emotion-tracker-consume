const express = require('express');
const snapshotRouter = express.Router();

// GET route for displaying the home page
snapshotRouter.get('/', (req, res) => {
    res.render('home');
});

// GET route for displaying the form to record a new snapshot
snapshotRouter.get('/record-snapshot', (req, res) => {
    res.render('create-snapshot'); 
});

// GET route for displaying all snapshots for the currently logged-in user
snapshotRouter.get('/history', (req, res) => {
    res.render('history'); 
});

// GET route for displaying trends in emotions for the currently logged-in user
snapshotRouter.get('/trends', (req, res) => {
    res.render('trends');
});


module.exports = snapshotRouter;