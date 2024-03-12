const express = require('express');
const { truncate } = require('fs/promises');
const snapshotRouter = express.Router();

// GET route for displaying the form to record a new snapshot
snapshotRouter.get('/record-snapshot', (req, res) => {
    res.render('snapshotCreateForm', {isAuthenticated: res.locals.isAuthenticated}); 
    //res.render('snapshotCreateForm'); 
});

// GET route for displaying all recorded snapshots for the currently logged-in user
snapshotRouter.get('/history', (req, res) => {
    res.render('snapshotHistoryForUser', {isAuthenticated: res.locals.isAuthenticated}); 
    //res.render('viewAllSnapshotsForUser', { currentPage }); 

});

snapshotRouter.get('/edit/:snapshotId', (req, res) => {
    res.render('editSnapshot', {isAuthenticated: res.locals.isAuthenticated}); 
});


// // GET route for displaying details of a specific snapshot identified by its ID, but only if it belongs to the currently logged-in user
// snapshotRouter.get('/view-snapshots/:id', (req, res) => {
//     res.render('viewSnapshotForUser', {isAuthenticated: res.locals.isAuthenticated}); 
// });

module.exports = snapshotRouter;