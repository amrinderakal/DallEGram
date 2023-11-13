const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@user.gyubsgw.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;
const uuid = require("uuid");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);
async function insertOneUser(fName, lName, uid, email, username) {
  try {
    await client.connect();
    const db = client.db("dallegram");
    const collection = db.collection("user");

    // Find the first document in the collection
    const insertedItem = await collection.insertOne({
      uid: uid,
      fName: fName,
      lName: lName,
      email: email,
      username: username,
      imageURLS: [],
      profilePic: "",
      bio: "",
    });
    console.log(insertedItem);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}

async function insertIntoFeedCollection(uid, imageURL, caption, username) {
  try {
    await client.connect();
    const db = client.db("dallegram");
    const collection = db.collection("feed");

    // Find the first document in the collection
    const insertedItem = await collection.insertOne({
      uid: uid,
      imageURL: imageURL,
      username: username,
      likes: 0,
      caption: caption,
      comments: [],
      timestamp: Date.now(),
    });
    console.log(insertedItem);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}

async function updateUID(email, uid) {
  try {
    await client.connect();
    const db = client.db("dallegram");
    const collection = db.collection("user");
    console.log("uid:    " + uid);
    if (!uid) {
      // Find the first document in the collection
      const updatedItem = await collection.updateOne(
        { email: email },
        {
          $set: {
            uid: uid,
          },
        }
      );
      console.log(updatedItem);
    }
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}

async function updateProfile(uid, fName, lName, bio, profilePic) {
  try {
    await client.connect();
    const db = client.db("dallegram");
    const collection = db.collection("user");
    if (typeof uid == "string") {
      // Find the first document in the collection
      const updatedItem = await collection.updateOne(
        { uid: uid },
        {
          $set: {
            profilePic: profilePic,
            fName: fName,
            lName: lName,
            bio: bio,
          },
        }
      );
      console.log(updatedItem);
    }
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}

async function addImageToUser(uid, imageURL, public) {
  try {
    await client.connect();
    const db = client.db("dallegram");
    const collection = db.collection("user");
    const updatedItem = await collection.updateOne(
      { uid: uid },
      { $push: { accountImages: { imageURL: imageURL, public: public } } }
    );
    // do something if there is not user
    console.log(updatedItem);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}

async function getUser(uid) {
  let user = null;
  try {
    await client.connect();
    const db = client.db("dallegram");
    const collection = db.collection("user");
    user = await collection.findOne({ uid: uid });
    // do something if there is not user
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
  //console.log(user);
  return user;
}

async function getImagesForFeed() {
  let images = null;
  try {
    await client.connect();
    const db = client.db("dallegram");
    const collection = db.collection("feed");
    images = await collection.find({}).toArray(function (err, results) {
      images = results;
    });
    // do something if there is not user
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
  //console.log(user);

  // for (let i = 0; i < images.length; i++) {
  //   try {
  //     await client.connect();
  //     const db = client.db("dallegram");
  //     const collection = db.collection("user");
  //     const user = await collection.findOne({ uid: images[i].uid });
  //     images[i].username = user.username;
  //     // do something if there is not user
  //   } finally {
  //     // Close the database connection when finished or an error occurs
  //     await client.close();
  //   }
  // }
  return images;
}

// weite all db stuff here

module.exports = {
  insertOneUser,
  updateUID,
  addImageToUser,
  getUser,
  insertIntoFeedCollection,
  updateProfile,
  getImagesForFeed,
};
