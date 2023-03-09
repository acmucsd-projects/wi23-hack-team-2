const express = require('express');
const router = express.Router();
const { Course, Schedule } = require('../models/model')

/* GET users listing. */
router.get('/', async function(req, res, next) {
    const courses = await Course.find()
    res.status(200).json( courses );
});

router.get('/:subj/:num', async function(req, res, next) {
    const courses = await Course.find({ "subj_course_id": req.params.subj + " " + req.params.num})
    res.status(200).json( courses );
});

router.get('/:subj_course_id', async function(req, res, next) {
    const courses = await Course.find({ "subj_course_id": req.params.subj_course_id})
    res.status(200).json( courses );
});
    
router.get('/schedules', async function(req, res, next) {
    const schedules = await Schedule.find()
    res.status(200).json( schedules );
});

router.post('/', async (req, res) => {
    const course = new Course({
        subj_course_id: req.body.subj_course_id,
        sec_code: req.body.sec_code,
        sec_id: req.body.sec_id,
        instructor: req.body.instructor,
        total_seats: req.body.total_seats,
        meetings: req.body.meetings

    })

    try {
        const newCourse = await course.save()
        res.status(201).json(newCourse)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

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
