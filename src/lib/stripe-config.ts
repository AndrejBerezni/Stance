import Stripe from 'stripe';

const secretKey = process.env.STRIPE_SECRET_KEY ?? '';

const stripe = new Stripe(secretKey, { apiVersion: '2025-05-28.basil' });

export default stripe;
