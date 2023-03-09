const express = require('express');
const router = express.Router();
const { Course, Schedule } = require('../models/model')

// get a specific course by name
router.get('/courselist/:subj/:num', async function(req, res, next) {
    const courses = await Course.find({ "subj_course_id": req.params.subj + " " + req.params.num})
    res.status(200).json( courses );
});

// alternative get a specific course by name
router.get('/courselist/:subj_course_id', async function(req, res, next) {
    const courses = await Course.find({ "subj_course_id": req.params.subj_course_id})
    res.status(200).json( courses );
});
   
// get all schedules
router.get('/schedules', async function(req, res, next) {
    const schedules = await Schedule.find()
    res.status(200).json( schedules );
});
   
// find schedules for a specific person
router.get('/schedules/:username', async function(req, res, next) {
    const schedules = await Schedule.find({ "name": req.params.username})
    res.status(200).json( schedules );
});

// post a schedule for a specific person
router.post('/schedules', async (req, res) => {
    const schedule = new Schedule({
        name: req.body.name

    })

    try {
        const newSchedule = await schedule.save()
        res.status(201).json(newSchedule)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router;
