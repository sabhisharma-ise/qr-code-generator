const express = require("express");
const qr = require('qr-image');
const fs = require('fs');
const fs_extra = require('fs-extra');
const path = require('path'); 

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public/"));
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");

});

app.post("/", function (req, res) {

    const url = req.body.URL;

    var qr_img = qr.image(url);
    qr_img.pipe(fs.createWriteStream(path.join(__dirname, 'public/qr_img.png')));

    res.render("index");

});

fs_extra.ensureDirSync(path.join(__dirname, 'public'));

app.post("/result", function(req, res) {
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, () => {
    
    console.log("Server is running at port 3000.");
})

module.exports = app;