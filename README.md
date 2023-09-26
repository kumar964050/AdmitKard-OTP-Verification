# OTP Verification Full Stack Application

This is a full-stack application for OTP (One-Time Password) verification using the MERN stack (MongoDB, Express, React, Node.js). It utilizes Twilio for sending OTPs via SMS.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- Generate and verify OTPs via Twilio SMS.
- Full-stack MERN application.
- Utilizes React Router v6 for smooth navigation.
- Toast notifications for user feedback.
- Secure OTP generation and verification process.

## Technologies Used

- React (with React Router v6)
- Express.js
- MongoDB (with Mongoose)
- Twilio for SMS
- react-toastify for notifications
- CORS for cross-origin resource sharing
- Dotenv for environment variables

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/narendra0325/AdmitKard-OTP-Verification.git

cd AdmitKard-OTP-Verification
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Configuration
Create a .env file in the server root directory of the project with the following variables:

- PORT=3000
- DB_LINK= MONGO_URI
- ACCOUNT_SID=TWILIO_ACCOUNT_SID
- AUTH_TOKEN=TWILIO_AUTH_TOKEN
- MY_NUMBER=TWILIO_PHONE_NUMBER

#usage
cd server
node server.js
cd client
npm start

#API Endpoints
POST /login Generates and sends OTP via Twilio.
POST /verify Verifies the entered OTP.

