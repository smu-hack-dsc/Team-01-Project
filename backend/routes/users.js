const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').get(async (req, res) => {
    try {
        const user = await User.findById(id)

        if (!user) {
            return res.status(404).json({ message: `no user with ${id} found` })
        }

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({ message: error.message })

    }
})

router.route('/add').post(async (req, res) => {

    try {
        const user = await User.create(req.body);
        res.status(200).json({ user });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

router.route('/:id').put(async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);

        if (!user) {
            return res.status(404).json({ message: `cannot find any user with ID ${id}` })
        }

        const updatedUser = await User.findById(id)
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.route('/:id').delete(async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({ message: `cannot find any user with ID ${id}` })
        }

        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;