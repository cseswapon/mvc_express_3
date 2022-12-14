/* const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId; */
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./utility/dbConnect");
const product = require("./routers/v1/products.route");
const review = require("./routers/v1/review.route");
const app = express();
const port = process.env.PORT || 5000;

// middle war

app.use(cors());
app.use(express.json());

dbConnect();

app.use("/api/v1/product", product);
app.use("/api/v1/review", review);

async function run() {
  /*  try {
    await client.connect();
    console.log("Connected Database");
    const database = client.db("Chair");
    const productCollection = database.collection("Product");
    const productReview = database.collection("Review");
    const orderCollection = database.collection("Order");
    const usersCollection = database.collection("Users");

    // product GET
    app.get("/products", async (req, res) => {
      const result = await productCollection.find({}).toArray();
      res.send(result);
    });
    // single product GET
    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const cursor = { _id: ObjectId(id) };
      const result = await productCollection.findOne(cursor);
      res.json(result);
    });
    // product dlt
    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: ObjectId(id) };
      const result = await productCollection.deleteOne(filter);
      res.json(result);
    });
    app.post("/products", async (req, res) => {
      const data = req.body;
      const result = await productCollection.insertOne(data);
      res.json(result);
    });
    // add product
    app.post("/order", async (req, res) => {
      const data = req.body;
      const result = await orderCollection.insertOne(data);
      res.json(result);
    });
    // get product
    app.get("/order", async (req, res) => {
      const result = await orderCollection.find({}).toArray();
      res.send(result);
    });
    // put order
    app.put("/order/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          status: "Shipped",
        },
      };
      const result = await orderCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.json(result);
    });
    app.delete("/order/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: ObjectId(id) };
      const result = await orderCollection.deleteOne(filter);
      res.send(result);
    });
    // delete order
    app.delete("/order/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: ObjectId(id) };
      const result = await orderCollection.deleteOne(filter);
      res.json(result);
    });
    // review GET
    app.get("/reviews", async (req, res) => {
      const result = await productReview.find({}).toArray();
      res.json(result);
    });
    // review post
    app.post("/reviews", async (req, res) => {
      const data = req.body;
      const result = await productReview.insertOne(data);
      res.json(result);
    });
    // user get
    app.get("/users", async (req, res) => {
      const cursor = req.query.email;
      const filter = { email: cursor };
      const result = await usersCollection.findOne(filter);
      let isAdmin = false;
      if (result?.role === "admin") {
        isAdmin = true;
      }
      res.json({ admin: isAdmin });
    });
    // user add
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.json(result);
    });
    // user put
    app.put("/users", async (req, res) => {
      const user = req.body;
      const filter = { email: user.email };
      const options = { upsert: true };
      const upDoc = {
        $set: user,
      };
      const result = await usersCollection.updateOne(filter, upDoc, options);
      res.send(result);
    });
    // use to admin role
    app.put("/users/admin", async (req, res) => {
      const user = req.body;
      const filter = { email: user.email };
      const options = { upsert: true };
      const upDoc = {
        $set: {
          role: "admin",
        },
      };
      const result = await usersCollection.updateOne(filter, upDoc, options);
      res.send(result);
    });
  } finally {
    //    await client.close();
  } */
}

run().catch(console.dir);

app.get('*', (req, res) => {
  res.send({ message: 'Route Not Found' });
  res.end()
})

app.get("/", (req, res) => {
  /* 
  console.log("Server Side is running");
  res.send("I am ready to go"); */
  res.render("home.ejs", {
    id: 34,
    /* user: {
      name: "test",
    }, */
  });
});

app.listen(port, () => {
  console.log("Server is listening on port", port);
});
