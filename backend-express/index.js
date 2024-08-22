//import express, Cors, & BodyParser
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes");

//init app
const app = express();

//use cors
app.use(cors());

//use body parser
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

//define port
const port = 3000;

//route
app.get("/", (req, res) => {
  res.send("Hello World");
});

//define routes
app.use("/api", router);

//start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
