const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
  username: String,
  password: String,
  reenterpassword: String,
  email: String,
});

module.exports = mongoose.model("signupcontents", signupSchema);
