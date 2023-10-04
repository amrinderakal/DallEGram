const express = require('express')
const app = express()
const port = 8000
require('dotenv').config();
const dbConnection = require("./databaseConnection");


// wrrite routes here and call fucntions from dbconnections

app.listen(process.env.PORT, () => 
{
    console.log(`Listening on port ${port}`)
    dbConnection.run()
});


// control c to stop
// npx nodemon index.js