const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@user.gyubsgw.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`
const uuid = require('uuid');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri)
async function insertOneUser(fName, lName, uid, email) {
  try {
    await client.connect();
    const db = client.db('dallegram');
    const collection = db.collection('user');

    // Find the first document in the collection
    const insertedItem = await collection.insertOne(
      {
        fName : fName,
        lName : lName,
        uid : uid,
        email: email,
        imageIDS:[]
      }
    )
    console.log(insertedItem);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}

async function insertIntoFeedCollection(uid, imageURL, public) {
   const imageID = uuid.v4();
  try {
    await client.connect();
    const db = client.db('dallegram');
    const collection = db.collection('feed');
   
    // Find the first document in the collection
    const insertedItem = await collection.insertOne(
      {
        uid : uid,
        imageURL :imageURL,
        imageID : imageID,
        public : public,
        likes : 0
      }
    )
    console.log(imageID);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
  addImageToUser(uid, imageID)
  return imageID
}


async function updateUID(email, uid) {
  try {
    await client.connect();
    const db = client.db('dallegram');
    const collection = db.collection('user');

    // Find the first document in the collection
    const updatedItem = await collection.updateOne(
   { email: email },
   {
     $set: {
       uid: uid
     }
   }
   
)
    console.log(updatedItem);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
  
}


async function addImageToUser(uid, imageID) {
  try {
    await client.connect();
    const db = client.db('dallegram');
    const collection = db.collection('user');
     const updatedItem = await collection.updateOne(
   { uid: uid },{ $push: { imageIDS: imageID } }
   
)
    // do something if there is not user
    console.log(updatedItem);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
  
}

async function getUser(uid) {
  let user = null
  try {
    await client.connect();
    const db = client.db('dallegram');
    const collection = db.collection('user');
     user = await collection.findOne({ uid: uid })
    // do something if there is not user
    
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
  //console.log(user);
  return  user
}

// weite all db stuff here

module.exports={insertOneUser, updateUID, addImageToUser, getUser, insertIntoFeedCollection}

