const mongoose = require('mongoose')

const calendarSchema = new mongoose.Schema({
  name: String,
  date: Date, //input fields for this should force specific date format
  startTime: String, //ideally force this as a datetime, thought string would be easier to start
  endTime: String, //ditto
  location: String,
  notes: String
})

const Calendar = mongoose.model('Calendar', calendarSchema)

module.exports = Calendar
