const router = require('express').Router();
let Signup = require('../models/signup.model');

router.route('/').get((req, res) => {
    Signup.find()
        .then(singups => res.json(signups))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').get(async (req, res) => {
    try {
        const signup = await Signup.findById(id)

        if (!signup) {
            return res.status(404).json({ message: `no signup with ${id} found` })
        }

        res.status(200).json(signup)
    } catch (err) {
        res.status(500).json({ message: error.message })

    }
})

router.route('/add').post(async (req, res) => {

    try {
        const {activity, user, userDetails} = req.body
        const activityId = activity.map(activity => activity.Id)
        const userId = user.map(user => user.id)

        const signup = Signup.create({activity, user, userDetails})
        res.status(200).json(signup);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

router.route('/:id').put(async (req, res) => {
    try {
        const { id } = req.params;
        const signup = await Signup.findByIdAndUpdate(id, req.body);

        if (!signup) {
            return res.status(404).json({ message: `cannot find any signup with ID ${id}` })
        }

        const updatedSignup = await Signup.findById(id)
        res.status(200).json(updatedSignup)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.route('/:id').delete(async (req, res) => {
    try {
        const { id } = req.params;
        const signup = await Signup.findByIdAndDelete(id);

        if (!signup) {
            return res.status(404).json({ message: `cannot find any signup with ID ${id}` })
        }

        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;