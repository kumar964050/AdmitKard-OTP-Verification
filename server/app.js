require("dotenv").config(); // config dotenv file
require("./config/database").connect(); // connect database file
//
const express = require("express");
const cors = require("cors");
const Users = require("./model/userMode");
const randomOtp = require("./utils/randomOtp");
const smsService = require("./utils/smsService");
const app = express();

// reg middleware
app.use(express.json());
app.use(
  cors({
    origin: "https://admitkard-otp-application.netlify.app",
  })
);

app.listen(process.env.PORT, () => {
  console.log("Server listening on port 4000");
});

// login route
app.post("/login", async (req, res, next) => {
  try {
    const { phone } = req.body;
    const OTP = randomOtp();
    // NOTE : this is demo project so i am not encrypt the OTP

    if (!phone) {
      return res.status(404).send({
        status: false,
        msg: "Please enter a phone number",
      });
    }

    // find user details if user exist already send OTP to phone number
    const findUser = await Users.findOne({ phone });
    if (findUser) {
      await Users.updateOne(
        { phone },
        {
          OTP_details: {
            expiry: Date.now() + 1000 * 60 * 5,
            OTP,
          },
        }
      );
      await smsService({ phone, OTP });

      return res.status(200).send({
        status: true,
        msg: "OTP has been sent successfully",
      });
    }

    // if user is not exist create a new user and sent a OTP to phone number
    await Users.create({
      phone,
      OTP_details: {
        expiry: Date.now() + 1000 * 60 * 5,
        OTP,
      },
    });
    // sending sms
    await smsService({ phone, OTP });
    return res.status(200).send({
      status: true,
      msg: "OTP has been sent successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
    next(error.message);
  }
});

// verify route
app.post("/verify", async (req, res, next) => {
  try {
    const { phone, OTP } = req.body;

    // data validation
    if (!OTP) {
      return res.status(400).send({
        status: false,
        msg: "Please enter a valid OTP",
      });
    }

    // find user details
    const findUser = await Users.findOne({ phone });
    if (!findUser) {
      return res.status(400).send({
        status: false,
        msg: "Invalid phone number",
      });
    }

    //  checking is OTP expired or not
    if (!(findUser.OTP_details.expiry > Date.now())) {
      return res.status(400).send({
        status: false,
        msg: "OTP has expired",
      });
    }

    //  checking entered OTP is valid or not
    if (findUser.OTP_details.OTP !== OTP) {
      return res.status(400).send({
        status: false,
        msg: "Invalid OTP",
      });
    }
    //  update user OTP details to null
    await Users.updateOne(
      { phone },
      { OTP_details: { expiry: Date.now(), OTP: null } }
    );

    res.status(200).send({
      status: true,
      msg: "OK",
    });
  } catch (error) {
    res.status(500).send(error.message);
    next(error.message);
  }
});
