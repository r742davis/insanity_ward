const express = require('express')
const router = express.Router()
const Calendar = require('../models/calendarModel.js')

router.get('/', (req, res) => {
  Calendar.find({}, (err, foundCalendar) => {
    res.json(foundCalendar)
  })
})

module.exports = router;
