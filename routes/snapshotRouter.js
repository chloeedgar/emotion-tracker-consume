const express = require('express');
const { truncate } = require('fs/promises');
const snapshotRouter = express.Router();


// GET route for displaying the form to record a new snapshot
snapshotRouter.get('/record-snapshot', (req, res) => {
    res.render('create-snapshot', {isAuthenticated:req.session.isAuthenticated || false}); 
    //res.render('snapshotCreateForm'); 
});

// GET route for displaying all recorded snapshots for the currently logged-in user
snapshotRouter.get('/history', (req, res) => {
    const userId = req.session.userId; // Assuming userId is stored in the session
    res.render('history', {isAuthenticated:req.session.isAuthenticated || false, userId:req.session.userId }); 

    // Render the snapshotHistoryForUser.ejs template and pass userId to it
    // res.render('snapshotHistoryForUser', { userId });
    //res.render('viewAllSnapshotsForUser', { currentPage }); 

});



// snapshotRouter.get('/record-snapshot', (req, res) => {
//     const isAuthenticated = req.session.isAuthenticated || false;

//     res.render('snapshotHistoryForUser', { isAuthenticated:isAuthenticated }); 
// });


// GET route for rendering the navbar
snapshotRouter.get('/trends', (req, res) => {
    // Retrieve isAuthenticated value from session
    const isAuthenticated = req.session.isAuthenticated || false;

    // Render the navbar and pass isAuthenticated to the template
    res.render('trends', { isAuthenticated: isAuthenticated });
});


snapshotRouter.get('/', (req, res) => {
    // Retrieve isAuthenticated value from session
    const isAuthenticated = req.session.isAuthenticated || false;

    // Render the navbar and pass isAuthenticated to the template
    res.render('home', { isAuthenticated: isAuthenticated });
});

module.exports = snapshotRouter;