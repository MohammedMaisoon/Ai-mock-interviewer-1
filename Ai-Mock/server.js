const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

// Serve files directly from the working directory
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const https = require('https');

// Keep-alive ping routine (runs every 14 minutes)
const RENDER_URL = 'https://ai-mock-interviewer-1-2zng.onrender.com';

setInterval(() => {
  https.get(RENDER_URL, (res) => {
    console.log(`Self-ping response status: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error('Self-ping failed:', err.message);
  });
}, 14 * 60 * 1000); // 14 minutes
