const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const app = express();

mongoose.connect("mongodb+srv://aniket:aniket@cluster0.r60zr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   // useFindAndModify: false
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    course: String
});

const User = new mongoose.model("User", userSchma);

app.get("/", async (req, res) => {
    const user = new User ({
        name: "Aniket Agarwal",
        email: "aniketagarwal57@gmail.com",
        course: "Computr Sciense"
    });

    user.save((err, res) => {
        console.log(res);
    });
});

app.listen("3000", () => {
    console.log("Server running...");
});