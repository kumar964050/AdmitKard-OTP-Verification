// Your AccountSID and Auth Token from console.twilio.com
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const sendSms = ({ phone, OTP }) => {
  client.messages
    .create({
      body: `Dear User, use this One Time Password '${OTP}' to log in to your account. This OTP will be valid for the next 5 mins.`,
      to: `+91${phone}`,
      from: process.env.MY_NUMBER,
    })
    .then((message) => {
      return {
        status: true,
        data: message,
      };
    })
    .catch((e) => {
      return { status: false, data: e.message };
    });
};
module.exports = sendSms;
