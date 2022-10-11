require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_KEY_SERVER);
const express = require('express');
const router = express.Router();

router.post('/create-checkout-session', async(req, res) => {
  const domainURL = process.env.DOMAIN;
  const { quantity } = req.body;
  
  // [customer] - if you have an existing Stripe Customer ID
  // For full details see https://stripe.com/docs/api/checkout/sessions/create
  console.log('Retrieving session...')
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price: process.env.PRICE,
        quantity: quantity
      },
    ],
    // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
    success_url: `${domainURL}/success.html?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainURL}/canceled.html`,
    // automatic_tax: {enabled: true},
    billing_address_collection: 'auto',
    // allow_promotion_code: true,
    shipping_address_collection: {
      allowed_countries: ['US']
    }
    // submit_type: isDonation ? 'donate' : 'pay',
  });

  console.log('Redirecting... to success or cancel...')
  return res.redirect(303, session.url);
});

module.exports = router;

