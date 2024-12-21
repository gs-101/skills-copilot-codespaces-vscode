// Create web server and listen to port 3000
// Create a POST route /comments that accepts JSON data and sends response with status 200
// Create a GET route /comments that sends response with status 200 and JSON data
// Create a GET route /comment/:id that sends response with status 200 and JSON data
// Create a PUT route /comment/:id that accepts JSON data and sends response with status 200
// Create a DELETE route /comment/:id that sends response with status 200

const express = require('express');
const app = express();

app.use(express.json());

app.post('/comments', (req, res) => {
  res.status(200).send();
});

app.get('/comments', (req, res) => {
  res.status(200).send();
});

app.get('/comment/:id', (req, res) => {
  res.status(200).send();
});

app.put('/comment/:id', (req, res) => {
  res.status(200).send();
});

app.delete('/comment/:id', (req, res) => {
  res.status(200).send();
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});