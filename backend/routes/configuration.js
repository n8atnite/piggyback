require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_KEY_SERVER);
const express = require('express');
const router = express.Router();

router.get('/config', async(req, res, next) => {
  console.log('Retrieving price info from config route...')
  const price = await stripe.prices.retrieve(process.env.PRICE);

  console.log(price)

  console.log('Sending price info...')
  res.send({
    publicKey: process.env.STRIPE_KEY_CLIENT,
    unitAmount: price.unit_amount,
    currency: price.currency,
  });
});

module.exports = router;