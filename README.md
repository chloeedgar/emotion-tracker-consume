# emotion-tracker-consume

## Emotion Tracker App that uses a REST API to record a user's emotion levels and allow them to visualise their emotions over time

This is the front-end application for module CSC7084 Web development at Queen's University Belfast, a web application designed to use the emotion-tracker-api REST API to record a user's emotion levels and allow them to visualise their emotions over time.

## Installation
To run this application locally, follow these steps:

1. Clone the repository to your local machine:

```git clone https://github.com/chloeedgar/emotion-tracker-consume.git```

2. Navigate to the project directory:

```cd emotion-tracker-consume```

4. Install dependencies using npm:

```npm install```

5. Start the development server:

```nodemon app.js```

Open your browser and navigate to http://localhost:3000 to view the application.

### Technologies Used
- [Axios](https://axios-http.com/) - Promise-based HTTP client for the browser and Node.js
- [Chart.js](https://www.chartjs.org/) - JavaScript library for creating interactive charts
- [cors](https://www.npmjs.com/package/cors) - Middleware for enabling CORS (Cross-Origin Resource Sharing)
- [dotenv](https://www.npmjs.com/package/dotenv) - Module for loading environment variables from a .env file
- [ejs](https://ejs.co/) - Embedded JavaScript templating
- [Express](https://expressjs.com/) - Web application framework for Node.js
- [express-session](https://www.npmjs.com/package/express-session) - Session middleware for Express.js
- [Moment.js](https://momentjs.com/) - Library for parsing, validating, manipulating, and displaying dates and times
- [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for Node.js
