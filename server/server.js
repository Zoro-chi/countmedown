require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const mongodbUser = process.env.USER;
const mongodbPassword = process.env.PASSWORD;

app.use(bodyParser.urlencoded({ extended: true }));
// TELLS EXPRESS TO USE JSON TO PARSE
app.use(bodyParser.json());

const connectionString = `mongodb+srv://${mongodbUser}:${mongodbPassword}@atlascluster.mxgmp.mongodb.net/?retryWrites=true&w=majority`;

// CONNECT APP TO MONGODB
MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log("connected to database");
    // COUNTMEDOWN IS THE NAME OF DB
    const db = client.db("countmedown");
    // CREATE COLLECTION ON DB
    const collection = db.collection("tasks");

    app.listen(port, () => {
      console.log(`listening on ${port}`);
    });

    app.get("/", (req, res) => {
      try {
        res.sendFile(__dirname + "/public/index.html");
      } catch (error) {
        console.log(error);
      }
    });

    app.get("/task", (req, res) => {
      console.log("get task!");
    });

    app.get("/task/:id", (req, res) => {
      console.log("get task id");
    });

    app.post("/task", (req, res) => {
      collection
        .insertOne(req.body)
        .then((result) => {
          console.log(result);
          res.redirect("/");
        })
        .catch((err) => {
          console.error(err);
        });
    });

    app.patch("/task/:id", (req, res) => {
      console.log("patch task");
    });

    app.delete("/task/:id", (req, res) => {
      console.log("delete task id");
    });
  })
  .catch((err) => console.error(err));
