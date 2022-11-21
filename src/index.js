const express = require("express");
const bodyParser = require("body-Parser")
const mongoose = require("mongoose");
const route = require("./routes/routes");
const app = express()

app.use(bodyParser.json());   

mongoose.connect("mongodb+srv://kunal0709:Singhkunal7@cluster0.u5yk4f2.mongodb.net/project2",{
    useNewUrlParser:true  
}) //promise return

.then(()=> console.log("MongoDB is connected"))  
.catch(err => console.log(err))


app.use("/",route) 

app.listen(process.env.PORT || 3000, function(){
    console.log("express app runing on port "+(process.env.PORT || 3000) )
})


