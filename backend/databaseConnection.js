const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@user.gyubsgw.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`

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



// weite all db stuff here

module.exports={insertOneUser, updateUID}

