const express = require('express');
const router = express.Router();
const { Course, Schedule } = require('../models/model')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const courses = await Course.find()
  res.status(200).json( courses );
});

module.exports = router;
