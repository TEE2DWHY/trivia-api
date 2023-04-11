const express = require("express");
const app = express();
const connect = require("./db/connect");
const dotenv = require("dotenv").config()
const cors = require("cors");
app.use(cors())
const create = require("./routes/create");

app.use(express.json());
app.use("/api/v1", create);

const port = 8000

const start = async () =>{
    try{
        await connect(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log(`server is running on port: ${port}`);
        })
    }
    catch(err){
        console.log(err)
    }
}

start();

