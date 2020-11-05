const router = require('express').Router();
let History = require('../models/history.model');

router.route('/').get((req, res) => {
	History.find()
		.then(histories => res.json(histories))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const language = req.body.language;
	const input = req.body.input;
	const translation = req.body.translation;

	const newHistory = new History({
		language,
		input,
		translation,
	});

	newHistory.save()
		.then(() => res.json('New history entry added successfully'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	History.findById(req.params.id)
		.then(history => res.json(history))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	History.findByIdAndDelete(req.params.id)
		.then(() => res.json('History entry deleted.'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').post((req, res) => {
	History.findById(req.params.id)
		.then(history => {
			history.language = req.body.language;
			history.input = req.body.input;
			history.translation = req.body.translation;

			history.save()
				.then(() => res.json('History updated successfully'))
				.catch(err => res.status(400).json('Error: ' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
