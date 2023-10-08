const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@user.gyubsgw.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri)
async function insertOneUser(fName, lName, uid, email) {

  // Need to check if uid is already in 
  try {
    await client.connect();
    const db = client.db('sample_mflix');
    const collection = db.collection('comments');

    // Find the first document in the collection
    const first = await collection.insertOne(
      {
        fName : fName,
        lName : lName,
        uid : uid,
        email: email
      }

    )
    console.log(first);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}

// weite all db stuff here

module.exports={insertOneUser}