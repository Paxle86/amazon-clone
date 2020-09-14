const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { TrendingUp } = require('@material-ui/icons');
const { response } = require('express');
const stripe = require('stripe')(
	'sk_test_51HQZgMIBVy7WH2zGlDYc3wTFWtdy5TkO9SRHrPzEEzyK550DlYdmct9bAlJ76Gjucr6QcqajyiooyXyAihXGdsg200esxaRhfH'
);

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (req, res) => {
	res.status(200).send('Hello world');
});
app.post('/payments/create', async (req, res) => {
	const total = req.query.total;
	console.log('payment req', total);
	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: 'usd',
	});

	// 201 - ok, created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-d176a/us-central1/api
