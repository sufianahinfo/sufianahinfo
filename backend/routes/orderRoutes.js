const stripe = require('stripe')(process.env.STRIPE_SECRET);

router.post('/', asyncHandler(async (req, res) => {
  const { items, shipping, email } = req.body;
  const total = items.reduce((s,i) => s + i.price * i.qty, 0);

  // create Stripe PaymentIntent
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(total * 100),
    currency: 'usd',
    receipt_email: email
  });
  const order = await Order.create({ items, total, shipping, paymentIntentId: paymentIntent.id });
  res.json({ clientSecret: paymentIntent.client_secret, orderId: order._id });
}));
