const express = require("express");
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;
const path = require("path");
const pagePath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");
app.set('view engine', 'hbs');
app.set("views", templatePath);
hbs.registerPartials(partialPath);

console.log(pagePath,partialPath,templatePath)
app.use(express.static(pagePath));

app.get("/",(req,res) => {
    res.render('index')
})
app.get("/artist", (req,res)=> {
    res.render("artist");
})
app.get("/genre", (req,res)=> {
    res.render("genre");
})
app.get("/profile", (req,res)=>{
    res.render("profile")
})
app.get("*", (req,res)=>{
    res.send("PAGE NOT FOUND")
})


app.listen(port, () => {
    console.log("Listening");
})