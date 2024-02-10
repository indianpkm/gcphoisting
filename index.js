import express from "express";
import { fileURLToPath } from 'url'; 
import path from "path";
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// Serve static files from 'client/dist' directory for all routes
const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Define __dirname
app.use(express.static(path.join(__dirname, 'client/dist')));

// Route handler for '/test'
app.get('/test', (req, res) => {
  res.json({ message: 'This is a test response from the server 🐱🤷‍♀️' });
});

// Route handler for '/other'
app.get('/other', (req, res) => {
  res.json({ message: 'This is from other api 👍' });
});

// Wildcard route handler to serve index.html for all unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
