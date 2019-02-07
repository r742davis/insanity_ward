const app = angular.module('CalendarsApp', [])
// const moment = require('moment')

app.controller('CalendarController', ['$http', function($http){

  // sets variable for index of item to be updated
  this.eventIndex = null;

  this.editEvent = (event) => {
    $http({
      method: 'PUT',
      url: '/calendar/' + event._id,
      data: {
        name: this.editName,
        date: this.editDate,
        startTime: this.editStartTime,
        endTime: this.editEndTime,
        location: this.editLocation,
        notes: this.editNotes
      }
    }).then(
      (res) => {
        console.log(res.data);
        // this.getCalendar(),
        // this.eventIndex = null
      },
      (err) => {
        console.log(err);
      }
    )
  }

  this.getCalendar = () => {
    $http({
      method: 'GET',
      url: '/calendar'
    }).then(
      (res) => {
      this.calendar = res.data
    })
  }

  this.createEvent = () => {
    $http({
      method: 'POST',
      url: '/calendar',
      data: {
        name: this.name,
        date: this.date,
        startTime: this.startTime,
        endTime: this.endTime,
        location: this.location,
        notes: this.notes
      }
    }).then(
      (res) => {
        this.getCalendar()
      },
      (err) => {
        console.log(err);
      }
    )
  }

  this.deleteEvent = (id) => {
    $http({
      method: 'DELETE',
      url: '/calendar/' + id
    }).then(response => {
      const removeByIndex = this.calendar.findIndex(calendar => calendar._id === id)
      this.calendar.splice(removeByIndex, 1)
    }, error => {
      console.log(error);
    })
  }

  let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const formatDate = (date) => {
    let d = new Date()
    let month = month
  }

  this.getCalendar()

}])
