const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    subj_course_id: {
        type: String,
        required: true
    },
    sec_code: {
        type: String,
        required: true
    },
    sec_id: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    total_seats: {
        type: String,
        required: true
    },
    meetings: {
        type: String,
        required: true
    }
})

const scheduleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Course = mongoose.model('Course', courseSchema)
const Schedule = mongoose.model('Schedule', scheduleSchema)

module.exports = {
    Course, Schedule
}