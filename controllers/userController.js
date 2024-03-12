// Import Axios for making HTTP requests
// const axios = require('axios');
// exports.signinPost = (req, res) => {
// }
// Method for signing in a user
// exports.signinPost = async (req, res) => {
//     try {
//         // Endpoint for signing in
//         const signinEndpoint = 'http://localhost:3001/api/users/signin';

//         // Extract username and password from request body
//         const { username, password } = req.body;

//         // Make POST request to signin endpoint with user credentials
//         const response = await axios.post(signinEndpoint, { username, password });

//         // Check if signin was successful
//         if (response.status === 200) {
//             // User successfully signed in, redirect to dashboard or homepage
//             res.redirect('/'); // Replace '/dashboard' with the desired redirect URL
//         } else {
//             // Signin failed, display error message
//             res.render('signin', { error: response.data.message }); // Assuming you have a signin.ejs view
//         }
//     } catch (error) {
//         console.error('Error signing in:', error);
//         res.status(500).send('Internal Server Error');
//     }
// }

// Export the signinPost method
//module.exports = { signinPost };
