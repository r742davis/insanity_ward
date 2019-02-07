const app = angular.module('CalendarsApp', [])

app.controller('CalendarController', ['$http', function($http){

  // sets variable for index of item to be updated
  this.eventIndex = null;



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

  this.editEvent = (event) => {
    $http({
      method: 'PUT',
      ur: `/calendar/:${event._id}`,
      data: {
        name: this.name,
        date: this.date,
        startTime: this.startTime,
        endTime: this.endTime,
        location: this.location,
        notes: this.notes
      }
    }).then(
      this.getCalendar,
      (err) => {
        console.log(err);
      }
    )
  }

  this.getCalendar()

}])
