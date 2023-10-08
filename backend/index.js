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

//TODO create route to send frontend all user dataupon sing in 

app.post("/add_user", (req, res) => {
  console.log(req.body)
  const user = req.body
  res.status(201).json();
  dbConnection.insertOneUser(user.fName, user.lName, user.uid, user.email, user.imageIDS)
});

app.put("/update_uid", (req, res) => {
  console.log(req.body)
  res.status(201).json();
  dbConnection.updateUID(req.body.email, req.body.uid)
});

app.listen(process.env.PORT, () => 
{
    console.log(`Listening on port ${port}`)
    
});



// control c to stop
// npx nodemon index.js