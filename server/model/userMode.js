const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  phone: {
    type: Number,
    required: true,
  },
  OTP_details: {
    expiry: {
      type: Date,
      default: Date.now(),
    },
    OTP: {
      type: Number,
      default: null,
    },
  },
});

module.exports = mongoose.model("User", userSchema);
