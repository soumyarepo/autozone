const express = require('express');
const fs = require('fs');
const https = require('https');
const app = express();
const PORT = 3000;

let data = { message: "Welcome, AutoZone" };

app.get('/', (req, res) => {
  res.json(data);
});
app.get('/healthz', (req, res) => {
    res.status(200).send('OK');
});

// Load dummy certificates
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, app).listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});