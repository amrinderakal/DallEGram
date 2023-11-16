const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
const cors = require("cors");
const dbConnection = require("./databaseConnection");
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());

//  ALL GET ROUTES
// finds user based on UID and sends the user as a response
app.get("/get_user/:uid", async (req, res) => {
  try {
    var user_uid = req.params["uid"];
    const user = await dbConnection.getUser(user_uid);
    console.log(user);
    res.send(user);
  } catch {
    res.status(500).send("Server error");
  }
});

app.get("/get_images_for_feed", async (req, res) => {
  try {
    const images = await dbConnection.getImagesForFeed();
    console.log(images);
    res.send(images);
  } catch {
    res.status(500).send("Server error");
  }
});

app.get("/get_images_for_profile_feed/:uid", async (req, res) => {
  try {
    var user_uid = req.params["uid"];
    const images = await dbConnection.getImagesForProfileFeed(user_uid);
    console.log(images);
    res.send(images);
  } catch {
    res.status(500).send("Server error");
  }
});

app.post("/add_user", async (req, res) => {
  try {
    const user = req.body;

    // Check if the username already exists
    const existingUser = await dbConnection.getUserByUsername(user.username);
    if (existingUser) {
      return res.status(400).send("Username already exists");
    }

    // If the username doesn't exist, proceed with inserting the new user
    const item = await dbConnection.insertOneUser(
      user.fName,
      user.lName,
      user.uid,
      user.email,
      user.username
    );

    res.status(201).send("User Added");
  } catch {
    res.status(500).send("Server error");
  }
});

app.get("/check_username/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const existingUser = await dbConnection.getUserByUsername(username);
    res.send({ exists: !!existingUser });
  } catch {
    res.status(500).send("Server error");
  }
});



// ALL POST ROUTES
// adds a user to the user collection



// ALL PUT Routes
// updated the uid of a uses based on email
app.put("/update_uid", (req, res) => {
  try {
    console.log(req.body);
    res.status(201).json();
    dbConnection.updateUID(req.body.email, req.body.uid);
    res.status(201).send("UID updated");
  } catch {
    res.status(500).send("Server error");
  }
});

// updated the Profile of a user based on uid
app.put("/update_profile", (req, res) => {
  try {
    console.log(req.body);
    res.status(201).json();
    dbConnection.updateProfile(
      req.body.uid,
      req.body.fName,
      req.body.lName,
      req.body.bio,
      req.body.profilePic
    );
    res.status(201).send("Profile updated");
  } catch {
    res.status(500).send("Server error");
  }
});

// adds a image id to a user based on uid
app.put("/add_image", (req, res) => {
  try {
    console.log(req.body);
    dbConnection.addImageToUser(
      req.body.uid,
      req.body.imageURL,
      req.body.public
    );
    res.status(201).send("Image Added");
  } catch {
    res.status(500).send("Server error");
  }
});

// adds an image to the post collection
app.post("/add_image_to_feed_collection", async (req, res) => {
  try {
    console.log(req.body);
    const imageID = await dbConnection.insertIntoFeedCollection(
      req.body.uid,
      req.body.imageURL,
      req.body.caption,
      req.body.username
    );
    res.status(201).send("Image Added");
  } catch {
    res.status(500).send("Server error");
  }
});

app.delete("/delete_post/:uid/:postId", async (req, res) => {
  try {
    const userUid = req.params.uid;
    const postId = req.params.postId;

    const deleted = await dbConnection.deletePost(userUid, postId);

    if (deleted) {
      res.status(200).send("Post deleted successfully");
    } else {
      res.status(404).send("Post not found or unable to delete");
    }
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).send("Server error: " + error.message);
  }
});






app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${port}`);
});

// control c to stop
// a
