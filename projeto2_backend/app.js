const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const uri = process.env.ATLAS_URI;

mongoose.connect("mongodb+srv://andrebr:6yO5wVVOl12F@cluster0.0qwku.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
	console.log("MongoDB database connection established successfully");
});

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