const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const histSchema = new Schema({
	language: { type: String, required: true },
	input: { type: String, required: true },
	translation: { type: String, required: true }
}, {timestamps: true}
);

const History = mongoose.model('History', histSchema);

module.exports = History;
