// Install required dependencies:
// - express: npm install express
// - stripe: npm install stripe

const express = require('express');
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');

const app = express();
app.use(express.json());

//
