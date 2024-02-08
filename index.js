import express from "express";
const app = express();
app.use(express.json());

app.use(express.static('client/dist'));
const port = process.env.PORT || 8080;

app.get('/test', (req, res) => {
  res.json({ message: 'This is a test response from the server 🐱🤷‍♀️' });
});


app.get('/other', (req, res) => {
    res.json({ message: 'This is from other api 👍' });
  });

app.listen(port, () => {
  console.log(`server start at port ${port} `);
});
