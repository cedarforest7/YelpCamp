var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var camps = [
        {name: "aaa", image: "https://images.unsplash.com/photo-1519708495087-ca1b71df408c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cfa82a18a43ac663a816cab80ad57543&auto=format&fit=crop&w=1056&q=80"},
        {name: "bbb", image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d95171e276fbd03de651f9aecb64b53d&auto=format&fit=crop&w=1050&q=80"},
        {name: "ccc", image: "https://images.unsplash.com/photo-1525177089949-b1488a0ea5b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2133a2e6648c39b6d1845bcc603b09ce&auto=format&fit=crop&w=600&q=60"},
    ]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds",function(req, res){
    
    res.render("campgrounds", {campgrounds: camps});
});


app.post("/campgrounds", function(req, res) {
    //get data from form and add to db
    var name = req.body.name;
    var img = req.body.img;
    var newCamp = {name: name, image: img};
    camps.push(newCamp);
    //redirect
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server Started!");
})