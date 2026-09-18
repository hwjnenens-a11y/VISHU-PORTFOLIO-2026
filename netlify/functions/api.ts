import express from 'express';
import serverless from 'serverless-http';

const app = express();

// Standard Express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes go here
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// For Netlify Functions, we need to handle the /api prefix if it's not already handled by the redirect
// In netlify.toml, we redirect /api/* to /.netlify/functions/api/:splat
// So the request to /api/health will reach this function with path /health (if using :splat)
// or /api/health (if using /*). Let's handle both.

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api', router);
app.use('/.netlify/functions/api', router);

export const handler = serverless(app);
