const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@user.gyubsgw.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;
const uuid = require("uuid");
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);
client.connect;

async function insertOneUser(fName, lName, uid, email, username) {
  try {
    // await client.connect();
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
    // await client.close();
  }
}

async function getUserByUsername(username) {
  let user = null;
  try {
    //await client.connect();
    const db = client.db("dallegram");
    const collection = db.collection("user");
    user = await collection.findOne({ username: username });
  } finally {
    //await client.close();
  }
  return user;
}

async function insertIntoFeedCollection(
  uid,
  imageURL,
  caption,
  username,
  profilePic
) {
  try {
    // await client.connect();
    const db = client.db("dallegram");
    const collection = db.collection("feed");

    // Find the first document in the collection
    const insertedItem = await collection.insertOne({
      uid: uid,
      imageURL: imageURL,
      username: username,
      likedUIDs: [],
      caption: caption,
      comments: [],
      timestamp: Date.now(),
      profilePicUrl: profilePic,
    });
    console.log(insertedItem);
  } finally {
    // Close the database connection when finished or an error occurs
    //await client.close();
  }
}

async function updateUID(email, uid) {
  if (typeof uid != "boolean") {
    try {
      //await client.connect();
      const db = client.db("dallegram");
      const collection = db.collection("user");
      console.log("uid:    " + uid);

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
    } finally {
      // Close the database connection when finished or an error occurs
      //await client.close();
    }
  }
}

async function updateProfile(uid, fName, lName, username, bio, profilePic) {
  try {
    //await client.connect();
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
            username: username,
            bio: bio,
          },
        }
      );
      console.log(updatedItem);
    }
  } finally {
    // Close the database connection when finished or an error occurs
    // await client.close();
  }

  try {
    //await client.connect();
    const db = client.db("dallegram");
    const collection = db.collection("feed");
    if (typeof uid == "string") {
      // Find the first document in the collection
      const updatedItem = await collection.updateMany(
        { uid: uid },
        {
          $set: {
            username: username,
            profilePicUrl: profilePic,
          },
        }
      );
      console.log(updatedItem);
    }
  } finally {
    // Close the database connection when finished or an error occurs
    // await client.close();
  }

  //need to also change the username in the feeds aswell
}

async function addImageToUser(uid, imageURL, public) {
  try {
    //await client.connect();
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
    // await client.close();
  }
}

async function getUser(uid) {
  let user = null;
  try {
    // await client.connect();
    const db = client.db("dallegram");
    const collection = db.collection("user");

    user = await collection.findOne({ uid: uid });

    // do something if there is not user
  } catch (err) {
    console.log(err);
  } finally {
    // Close the database connection when finished or an error occurs
    //await client.close();
  }

  return user;
}

async function getImagesForFeed() {
  let images = null;
  try {
    //await client.connect();
    const db = client.db("dallegram");
    const collection = db.collection("feed");
    images = await collection.find({}).toArray(function (err, results) {
      images = results;
    });
    // do something if there is not user
  } catch (err) {
    console.log(err);
  } finally {
    // Close the database connection when finished or an error occurs
    //await client.close();
  }
  return images;
}

async function getImagesForProfileFeed(uid) {
  let images = null;
  try {
    //await client.connect();
    const db = client.db("dallegram");
    const collection = db.collection("feed");
    images = await collection
      .find({ uid: uid })
      .toArray(function (err, results) {
        images = results;
      });
    // do something if there is not user
  } catch (err) {
    console.log(err);
  } finally {
    // Close the database connection when finished or an error occurs
    //await client.close();
  }
  return images;
}

async function deletePost(userUid, postId) {
  try {
    //await client.connect();
    const db = client.db("dallegram");
    const collection = db.collection("feed");

    const deletionResult = await collection.deleteOne({
      uid: userUid,
      _id: new ObjectId(postId),
    });

    return deletionResult.deletedCount > 0;
  } finally {
    //await client.close();
  }
}

async function updateLikes(postId, uid) {
  try {
    //await client.connect();
    const db = client.db("dallegram");
    const collection = db.collection("feed");
    const updatedPost = await collection.updateOne(
      { _id: new ObjectId(postId) },
      { $push: { likedUIDs: uid } }
    );
    return updatedPost.modifiedCount > 0;
  } finally {
    //await client.close();
  }
}

async function removeLikes(postId, uid) {
  try {
    // await client.connect();
    const db = client.db("dallegram");
    const collection = db.collection("feed");
    const updatedPost = await collection.updateOne(
      { _id: new ObjectId(postId) },
      { $pull: { likedUIDs: uid } }
    );
    return updatedPost.modifiedCount > 0;
  } finally {
    //await client.close();
  }
}

// write all db stuff here

module.exports = {
  insertOneUser,
  updateUID,
  addImageToUser,
  getUser,
  insertIntoFeedCollection,
  updateProfile,
  getImagesForFeed,
  getUserByUsername,
  getImagesForProfileFeed,
  deletePost,
  updateLikes,
  removeLikes,
};
