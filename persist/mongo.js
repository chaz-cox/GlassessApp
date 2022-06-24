const mongoose = require('mongoose');

const db = mongoose.connection;

function connect(user , password, host, port, db){
    const connectionString = ``;

    mongoose.connect(connectionString,{
        useNewUrlParser: true,
        useUnifinedTopology: true,
    });
}

function setUpConnectionHandlers(callback){
    db.once("connecting",() =>{
        console.log("Connecting to MongoDB");
    });
    db.once("connected",() =>{
        console.log("Connected to MogoDB");
    });
    db.once("open", () =>{
        console.log("Open Connection to MogoDB");
        callback();
    });
    db.once("error", () =>{
        console.log("Error Connection to MogoDB");
    });
}

module.exports={
    connect: connect,
    setUpConnectionHandlers: setUpConnectionHanders,
};

