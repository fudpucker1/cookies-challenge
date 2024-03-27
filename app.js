const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Route for login - i.e. http://localhost:3000/login?name=YourName
app.get('/login', (req, res) => {
  const { name } = req.query;
  if (name) {
    // Set cookie with the name
    res.cookie('name', name);
    res.send(`Welcome ${name}!`);
  } else {
    res.send('Please provide a name.');
  }
});

// Route for hello
app.get('/hello', (req, res) => {
  const name = req.cookies.name;
  if (name) {
    res.send(`Welcome ${name}!`);
  } else {
    res.send('Please login first.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});