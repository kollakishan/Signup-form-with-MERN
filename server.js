const express = require("express");
const mongoose = require("mongoose");
const signupData = require("./DbData");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

//middleware=================================================
app.use(express.json());

// app.use(bodyParser.json); // used for parsing the input data from front end

//DB config===================================================
const connection_url = `mongodb+srv://Kishan:Gannasicalil1!@cluster0.q3wxm.mongodb.net/<dbname>?retryWrites=true&w=majority`;
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//????============================================================================================================

//api routes=====================================================================================================
app.post("/signup/new", (req, res) => {
  console.log("hellllllllll");

  const DbData = req.body;
  const userName = req.body.username; // reading username fromsubmitsignup from signup.js
  signupData.findOne({ username: userName }, function (err, sd) {
    console.log("this is error" + err);
    console.log("this is data" + sd);
    if (sd != null) {
      res.json({ message: "Cannot create user, user already exists" });
    } else {
      signupData.create(DbData, (err, data) => {
        if (err) {
          res.json({ message: "Encountered an error while creating user" });
        } else {
          res.json({ message: "User created successfully" });
        }
      });
    }
  });
});

//listner==========================================
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
