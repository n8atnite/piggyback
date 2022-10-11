require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_KEY_SERVER);
const express = require('express');
const router = express.Router();


router.post('/webhook', async(req, res) => {
  let data;
  let eventType;

  // Check if the webhook is configured
  if (process.env.STRIPE_SECRET_WEBHOOK) {
    // Retrieve the event by verifying the signature using the raw body and 
    // secret
    let event;
    let signature = req.headers['stripe-signature'];

    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        signature,
        process.env.STRIPE_SECRET_WEBHOOK
      )
    } catch(err) {
        console.log('Webhook signature verification failed.');
        return res.sendStatus(400);
    }
    // Extract the object from the event
    data = event.data;
    eventType = event.type;
  } else {
    // Webhook signing recommended i.e. secret in `config.js`
    // This is alternative: retrieve event data directly from request body
    data = req.body.data;
    eventType = req.body.type;
  }
  
  if (eventType === 'checkout.session.completed') {
    console.log('Payment received');
    // add integration with slack webhook
  }

  res.sendStatus(200);
});

module.exports = router;