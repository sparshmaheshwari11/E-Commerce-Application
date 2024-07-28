const express = require('express');
const Stripe = require('stripe');
const router = express.Router();
const stripe = Stripe('your-stripe-secret-key');

router.post('/checkout', async (req, res) => {
  const { amount, token } = req.body;

  try {
    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      source: token.id,
      description: 'E-commerce Purchase'
    });
    res.status(200).json(charge);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
