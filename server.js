const express = require('express')
const app = express()
const mongoose = require('mongoose')


app.use(express.json())
app.use(express.static('public'))

const calendarController = require('./controllers/calendar.js')
app.use('/calendar', calendarController);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Yo yo yo, listening...');
})

mongoose.connect('mongodb://localhost:27017/calendar', {useNewUrlParser: true})
mongoose.connection.once('open', () => {
  console.log('candy gram for mongo!');
})
