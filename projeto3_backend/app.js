const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/projeto3_backend', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
	console.log("MongoDB database connection established successfully");
});

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const historyRouter = require('./routes/history');

app.use('/history', historyRouter)

app.listen(port, () => {
	console.log('Server is running on port: 5000');
});

module.exports = app