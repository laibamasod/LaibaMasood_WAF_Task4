const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// form data to req.body
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to Pug
app.set('view engine', 'pug');

// Define a route to render the Pug template
app.get('/create_my_cv', (req, res) => {
  res.render('index');
});

app.post('/generate_cv', (req, res) => {
    const { name, email, education, address, contact } = req.body;
    res.render('cv', {name, email, education, address, contact});
});

app.get('*', (req, res) => {
    res.status(404).send('404 - Not Found: Enter the right URL');
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});