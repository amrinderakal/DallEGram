const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000
const cors = require('cors');
const dbConnection = require("./databaseConnection");     
require('dotenv').config();
app.use(cors())
app.use(bodyParser.json())


// adds a user to the user collection
app.post("/add_user", (req, res) => {
  try{
    console.log(req.body)
    const user = req.body
    const item = dbConnection.insertOneUser(user.fName, user.lName, user.uid, user.email)
      res.status(201).send("User Added");
  }catch{
       res.status(500).send('Server error');
  }
 
});

// updated the uid of a uses based on email
app.put("/update_uid", (req, res) => {
  try{
    console.log(req.body)
    res.status(201).json();
    dbConnection.updateUID(req.body.email, req.body.uid)
      res.status(201).send("UID updated");
  }catch{
      res.status(500).send('Server error');
  }
  
});

// adds a image id to a user based on uid
app.put("/add_image", (req, res) => {
  try{
      console.log(req.body)
      dbConnection.addImageToUser( req.body.uid, req.body.imageURL)
      res.status(201).send("Image Added");
  }catch{
       res.status(500).send('Server error');
  }
  
});

// finds user based on UID and sends the user as a response
app.get("/get_user", async (req, res) => {
  try{
      console.log(req.body)
      const user = await dbConnection.getUser( req.body.uid)
      console.log(user)
      res.send(user);
  }catch{
      res.status(500).send('Server error');
  }
  
});


// adds an image to the post collection
app.post("/add_image_to_feed_collection", async (req, res) => {
  try{
    console.log(req.body)
    const imageID = await dbConnection.insertIntoFeedCollection(req.body.uid, req.body.imageURL, req.body.public)
    res.status(201).send("Image Added");
  }catch{
       res.status(500).send('Server error');
  }
 
});

app.listen(process.env.PORT, () => 
{
    console.log(`Listening on port ${port}`)
    
});



// control c to stop
// a