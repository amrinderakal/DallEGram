const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000
const cors = require('cors');
const dbConnection = require("./databaseConnection");     
require('dotenv').config();
app.use(cors())
app.use(bodyParser.json())
// wrrite routes here and call fucntions from dbconnections



app.post("/add_user", (req, res) => {
  console.log(req.body)
  const user = req.body
  res.status(201).json();
  dbConnection.insertOneUser(user.fName, user.lName, user.uid, user.email)
});

app.listen(process.env.PORT, () => 
{
    console.log(`Listening on port ${port}`)
    
});



// control c to stop
// npx nodemon index.js