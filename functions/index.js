const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { TrendingUp } = require('@material-ui/icons');
const stripe = require('stripe')(
	'sk_test_51HQZgMIBVy7WH2zGlDYc3wTFWtdy5TkO9SRHrPzEEzyK550DlYdmct9bAlJ76Gjucr6QcqajyiooyXyAihXGdsg200esxaRhfH'
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (req, re) => {
	res.status(200).send('Hello world');
});
exports.api = functions.https.onRequest(app);
