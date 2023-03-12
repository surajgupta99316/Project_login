const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    empid : Number,
    fname: String,
    lname: String,
    department: String,
    email: { type: String, unique: true },
    password: {
      type: String ,
      min : [8,'Too few'],
      max :[20,'Too much'],
    },
      userType: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);
