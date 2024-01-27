const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_database_user',
  password: 'your_database_password',
  database: 'your_database_name',
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/registration.html');
});

app.post('/register', (req, res) => {
  const { email, password, phone } = req.body;

  const query = 'INSERT INTO users (email, password, phone) VALUES (?, ?, ?)';
  connection.query(query, [email, password, phone], (err, results) => {
    if (err) {
      console.error('Database query error: ' + err.stack);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.send('Registration successful');
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

