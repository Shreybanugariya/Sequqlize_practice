const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('./sequelize');

const router = require('./routers');

const app = express();

app.use(express.json())
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router)

app.get('/', (req, res) => {
  res.json({ message: 'SQL Practice' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});