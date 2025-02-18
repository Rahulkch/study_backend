const express=require("express");
const app=express();
const cors = require('cors');
// Enable CORS
app.use(cors());

app.use(express.json());

require("dotenv").config();
const port=process.env.PORT||8000;

const x=require("./config/db");
x();


const r=require("./Route/route");
app.use("/route",r);



app.listen(port,()=>{
    console.log("app is listening ",port);
})


app.get("/" ,(req,res) =>{
    res.send(`<h1> This is HOMEPAGe byby</h1>`);
})
//jLPF9mGZD6yoCQnK
//miaphone40