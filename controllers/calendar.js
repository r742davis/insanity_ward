const express = require('express')
const router = express.Router()
const Calendar = require('../models/calendarModel.js')

router.get('/', (req, res) => {
  Calendar.find({}, (err, foundCalendar) => {
    res.json(foundCalendar)
  })
})

router.delete('/:id', (req, res) => {
  Calendar.findByIdAndRemove(req.params.id, (err, deletedEvent) => {
    res.json(deletedEvent)
  })
})

router.post('/', (req, res) => {
  Calendar.create(req.body, (err, newEvent) => {
    res.json(newEvent)
  })
})

router.put('/:id', (req, res) => {
  Calendar.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedEvent) => {
    res.json(updatedEvent)
  })
})

module.exports = router;
