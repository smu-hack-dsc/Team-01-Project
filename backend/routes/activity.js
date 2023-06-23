const router = require('express').Router();
let Activity = require('../models/activity.model');

router.route('/').get((req, res) => {
    Activity.find()
        .then(activities => res.json(activities))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').get(async (req, res) => {
    try {
        const activity = await Activity.findById(id)

        if (!activity) {
            return res.status(404).json({ message: `no activity with ${id} found` })
        }

        res.status(200).json(activity)
    } catch (err) {
        res.status(500).json({ message: error.message })

    }
})

router.route('/add').post(async (req, res) => {

    try {
        const activity = await Activity.create(req.body);
        res.status(200).json({ activity });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

router.route('/:id').put(async (req, res) => {
    try {
        const { id } = req.params;
        const activity = await Activity.findByIdAndUpdate(id, req.body);

        if (!activity) {
            return res.status(404).json({ message: `cannot find any activity with ID ${id}` })
        }

        const updatedActivity = await Activity.findById(id)
        res.status(200).json(updatedActivity)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.route('/:id').delete(async (req, res) => {
    try {
        const { id } = req.params;
        const activity = await Activity.findByIdAndDelete(id);

        if (!activity) {
            return res.status(404).json({ message: `cannot find any activity with ID ${id}` })
        }

        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;