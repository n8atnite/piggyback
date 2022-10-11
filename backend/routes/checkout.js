require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_KEY_SERVER);
const express = require('express');
const router = express.Router();

router.get('/checkout-session', async(req, res) => {
  const { sessionId } = req.query;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  res.send(session);
});

module.exports = router;