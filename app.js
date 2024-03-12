const express = require('express');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv').config({ path: './config.env' });
const userRouter = require('./routes/userRouter.js');
const snapshotRouter = require('./routes/snapshotRouter.js');
const isAuthenticated = require('./middleware');

const app = express();

// Set 'views' directory for EJS templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(morgan('tiny')); // Logging middleware
app.use(express.static(path.join(__dirname, '/public'))); // Serve static files
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies
app.use(isAuthenticated); // Custom middleware for checking authentication status


// Define routes
app.get('/', (req, res) => {
  // Render the home.ejs template
   res.render('home', {isAuthenticated: res.locals.isAuthenticated});
  //res.render('home');
});

// catch 401 errors and redirect user to the login page
// catch 500 errors gracefully


app.use('/', userRouter);
app.use('/snapshots', snapshotRouter);


// Start the server
app.listen(process.env.PORT , () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
