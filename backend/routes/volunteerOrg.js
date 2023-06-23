const router = require('express').Router();
let VolunteerOrg = require('../models/volunteerOrg.model');

router.route('/').get((req, res) => {
    VolunteerOrg.find()
        .then(volunteerOrgs => res.json(volunteerOrgs))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').get(async (req, res) => {
    try {
        const volunteerOrg = await VolunteerOrg.findById(id)

        if (!volunteerOrg) {
            return res.status(404).json({ message: `no volunteerOrg with ${id} found` })
        }

        res.status(200).json(volunteerOrg)
    } catch (err) {
        res.status(500).json({ message: error.message })

    }
})

router.route('/add').post(async (req, res) => {

    try {
        const {organisationName, password, activities} = req.body
        const activityIds = activities.map(activity => activity.Id)
        
        const volunteerOrg = await VolunteerOrg.create({ organisationName, password, activities: activityIds })
        res.status(200).json(volunteerOrg);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

router.route('/:id').put(async (req, res) => {
    try {
        const { id } = req.params;
        const volunteerOrg = await VolunteerOrg.findByIdAndUpdate(id, req.body);

        if (!volunteerOrg) {
            return res.status(404).json({ message: `cannot find any volunteerOrg with ID ${id}` })
        }

        const updatedVolunteerOrg = await VolunteerOrg.findById(id)
        res.status(200).json(updatedVolunteerOrg)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.route('/:id').delete(async (req, res) => {
    try {
        const { id } = req.params;
        const volunteerOrg = await VolunteerOrg.findByIdAndDelete(id);

        if (!volunteerOrg) {
            return res.status(404).json({ message: `cannot find any volunteerOrg with ID ${id}` })
        }

        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;