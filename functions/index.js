const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
	'sk_test_51HQZgMIBVy7WH2zGlDYc3wTFWtdy5TkO9SRHrPzEEzyK550DlYdmct9bAlJ76Gjucr6QcqajyiooyXyAihXGdsg200esxaRhfH'
);
