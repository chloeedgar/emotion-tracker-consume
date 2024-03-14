const express = require('express');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv').config({ path: './config.env' });
const userRouter = require('./routes/userRouter.js');
const snapshotRouter = require('./routes/snapshotRouter.js');
const session = require('express-session');
const cors = require('cors');
const axios = require('axios'); // Import Axios

//const isAuthenticated = require('./middleware');

const app = express();

// Set 'views' directory for EJS templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(morgan('tiny')); // Logging middleware
app.use(express.static(path.join(__dirname, '/public'))); // Serve static files
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies
//app.use(isAuthenticated); // Custom middleware for checking authentication status


// Set up session middleware
app.use(session({
    secret: 'secret-key', 
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false, // Set to true if using HTTPS
        httpOnly: true,  // best practise=true as prevents cross-site scripting (XSS) attacks
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true // Allow cookies to be sent cross-origin
}));

// Set up Axios defaults to include credentials
axios.defaults.withCredentials = true;


// Define routes
// app.get('/', (req, res) => {
//   // Render the home.ejs template
//    res.render('home', {isAuthenticated: res.locals.isAuthenticated});
//   //res.render('home');
// });

// catch 401 errors and redirect user to the login page
// catch 500 errors gracefully


app.use('/', userRouter);
app.use('/snapshots', snapshotRouter);

// Error handler middleware
const errorHandler = (err, req, res, next) => {
    // Check if the error is a 401 Unauthorized
    if (err.status === 401) {
        // Redirect the user to the login page
        return res.redirect('/login');
    }

    // Handle other errors
    // Send an error response or log the error
    res.status(err.status || 500).json({ message: err.message || 'Internal server error' });
};

// Register the global error handler middleware
app.use(errorHandler);

// Start the server
app.listen(process.env.PORT , () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
