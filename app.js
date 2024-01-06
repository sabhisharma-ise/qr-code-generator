import express from "express";
import qr from "qr-image";
import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public/"));
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/public/index.html");

});

app.post("/", function (req, res) {

    const url = req.body.URL;

    var qr_img = qr.image(url);
    // qr_img.pipe(fs.createWriteStream(path.join(__dirname, 'public/qr_img.png')));
    qr_img.pipe(fs.createWriteStream(__dirname + "/public/qr_img.png"));

    res.render("index");

});

app.post("/result", function(req, res) {
    res.redirect("/");
});

app.listen(process.env.PORT || port, () => {
    
    console.log("Server is running at port 3000.");
})

export default app;