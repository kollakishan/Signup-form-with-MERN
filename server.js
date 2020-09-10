const express = require("express");
const mongoose = require("mongoose");
const signupData = require("./DbData");
const app = express();
const port = 5000;

//middleware=================================================
app.use(express.json());

//DB config===================================================
const connection_url = `mongodb+srv://Kishan:<password>@cluster0.q3wxm.mongodb.net/<dbname>?retryWrites=true&w=majority`;
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//api routes===============================================
app.post("/signup/new", (req, res) => {
  console.log("hellllllllll");

  const DbData = req.body;

  signupData.create(DbData, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listner==========================================
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
