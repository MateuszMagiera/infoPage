const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://localhost:27017/JBDB", {useNewUrlParser:true, useUnifiedTopology:true}, function(err){
    if(!err){
        console.log("Connected to a database");
    }
});

const contactSchema = new mongoose.Schema({
    imie: String,
    nazwisko : String,
    telefon: String,
    email: String,
    opis: String
});

const Contact = new mongoose.model('Contact', contactSchema);

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

app.get("/",function(req,res){
    res.render("Home")
});
app.get('/gallery',function(req,res){
    res.render("gallery")
});
app.get("/contact", function(req,res){
    res.render("contact")
});

app.post("/contact", function(req,res){
    let name = req.body.imie;
    let surname = req.body.nazwisko;
    let phone = req.body.telefon;
    let email = req.body.email;
    let desc = req.body.opis;
    const newContact = new Contact({
    imie: name,
    nazwisko: surname,
    telefon: phone,
    email: email,
    opis: desc
})
newContact.save(); 
res.redirect("/contact")
});

app.listen(process.env.PORT || 3000, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Server started");
    }
})