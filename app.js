const express = require('express');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv').config({ path: './config.env' });
const userRouter = require('./routes/userRouter.js');
const snapshotRouter = require('./routes/snapshotRouter.js');
const session = require('express-session');
const cors = require('cors');
const axios = require('axios'); // Import Axios

const app = express();

// Set 'views' directory for EJS templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(morgan('tiny')); // Logging middleware
app.use(express.static(path.join(__dirname, '/public'))); // Serve static files
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies

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


app.use('/', userRouter);
app.use('/snapshots', snapshotRouter);

// Define error-handling middleware for server-side errors
app.use((req, res, next) => {
    res.status(404).render('404'); // Page not found errors

});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500'); // internal server errors
});

// Start the server
app.listen(process.env.PORT , () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
