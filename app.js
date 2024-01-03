
const express = require("express");
const qr = require('qr-image');
const fs = require('fs');

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

    var qr_img = qr.image(url, { type: 'png' });
    qr_img.pipe(fs.createWriteStream('public/qr_img.png'));

    fs.writeFile("public/url.txt", url, err => {

        if (err) throw err;
        // console.log("The file has been saved!");
    })

    // res.sendFile(imageURL);

    res.render("index");

});

app.post("/result", function(req, res) {
    res.redirect("/");
});

app.listen(3000, () => {

    console.log("Server running at port 3000");

});

module.exports = app;