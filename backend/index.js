const mongoose= require("mongoose");
mongoose.connect("")
var db=mongoose.connection;
db.on("open",()=>console.log("db connected"));
db.on("error",()=>console.log("error occcured"));