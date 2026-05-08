const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection String
const uri = `mongodb+srv://mosharof_admin:mosharof_dev@cluster0.vle8fsy.mongodb.net/?appName=Cluster0`;

// Create a MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
//  Run Function
const run = async () => {
  // Connect to MongoDB
  try {
    await client.connect();
    // CRUD server Database and collection
    const database = client.db("nextjs-mongodb-crud-server");
    const usersCollection = database.collection("users");
    // get all users
    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find();
      const allUsers = await cursor.toArray();

      res.send(allUsers);
    });

    // get user details
    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      console.log("user id", id);
      const result = await usersCollection.findOne(query);
      res.send(result);
    });
    // create a user
    app.post("/users", async (req, res) => {
      const user = req.body;

      const result = await usersCollection.insertOne(user);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
      res.send(result);
    });

    // // update a user
    // app.put("/users/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const user = req.body;
    //   const query = { _id: new ObjectId(id) };
    //   const result = await usersCollection.updateOne(query, { $set: user });
    //   res.send(result);
    // });
    // delete a user
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // await client.close();
  }
};
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("CRUD Server is running!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
