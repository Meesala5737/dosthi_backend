const mongoose = require("mongoose");

const User = mongoose.Schema({
  email: { type: String },
  name: { type: String, default: "user" },
  gender:{ type: String },
  dob: { type: Date},
  dpUrl: { type: Date},
  start_date: { type: Date, default: Date.now() },
  status: { type: String, default: "active" }
});

module.exports = mongoose.model("users", User);
