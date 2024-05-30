const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    name: {
      type: String,
    },
    message:{
      type: String,
    },
},
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
