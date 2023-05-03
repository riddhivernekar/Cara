const express=require("express");
const app=express();
const path=require("path");
app.use(express.static(path.join(__dirname,'../Public')));
// console.log(path.join(__dirname,'../CSS'));

app.get("/",function(req,res)
{
    res.sendFile(path.join(__dirname,"../HTML/index.html"));       
    // res.sendFile(__dirname+"/index.html");   

});

app.get("/home",function(req,res)
{
    res.sendFile(path.join(__dirname,'../HTML/index.html'));
});

app.listen(2023,function(req,res)
{
    console.log("Server has been setup at port 2023");
});