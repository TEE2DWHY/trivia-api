const express = require("express");
const app = express();
const connect = require("./db/connect");
const dotenv = require("dotenv").config();
const create = require("./routes/create");
const cors = require("cors");
app.use(cors());
// middleWears
app.use(express.json());
// routes
app.use("/api/v1", create);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is running on port: ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
