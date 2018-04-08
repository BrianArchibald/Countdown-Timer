
//not sure if (eventDate) is correct below
// function getTimeRemaining (endtime)  {

//  //var event = document.getElementById('event');
    
//  //var eventHour = document.getElementById('eventHour');
//  //var eventMinute = document.getElementById('eventMinute'); 
//  //var eventSeconds = document.getElementById('eventSeconds');
//  //var eventAmPm = document.getElementById('eventAmPm');

//  var remainingTime = Date.parse(endtime) - Date.parse(new Date());
//  var seconds = Math.floor( (remainingTime/1000) % 60);
//  var minutes = Math.floor( (remainingTime/1000/60) % 60);
//  var hours = Math.floor( (remainingTime/(1000*60*60)) % 24);
//  var days = Math.floor( remainingTime/(1000*60*60*24));

//  return {
//      'remainingTime' : remainingTime,
//      'days' : days,
//      'hours' : hours,
//      'minutes' : minutes,
//      'seconds' : seconds
//  };
// }

// function startTimer (id, endtime) {
//  var clock = document.getElementById(id);
//  function updateClock(){
//  var remainingTime = getTimeRemaining(endtime);
//      clock.innerHTML =  'days: ' + remainingTime.days + '<br>' +
//                         'hours: ' + remainingTime.hours + "<br>" +
//                         'minutes: ' + remainingTime.minutes + '<br>' +
//                         'seconds: ' + remainingTime.seconds;

//      if(remainingTime.total <=0) {
//          clearInterval(timeInterval);
//      }
//  }

//  updateClock(); // run function once at first without delay
//  var timeInterval = setInterval(updateClock, 1000);

// var eventDate = document.getElementById('eventDate');



//get event time and set default time if only date
//var eventDate = new Date().getTime();
// get the current time
//var now = new Date().getTime();

// differenc between current time and event time
//var difference = eventDate - now;

// display days,hours,minutes, seconds to event time


// update every second

//message when timer is completed

///////////////////////////////////////  try 2//////////////////////
// document.getElementById('eventDate').addEventListener('change', function () {
//     var input = this.value;
//     var eventDate = new Date(input);
// })

// //var eventDate = new Date(document.getElementById('eventDate')).getTime();

// var interval = setInterval(function() {

//  var now = new Date().getTime();

//     var remainingTime = eventDate - now;

//  var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    
//     document.getElementById('timer').innerHTML = days + "d " + hours + "h "
//     + minutes + "m " + seconds + "s ";

//     if (remainingTime < 0) {
//      clearInterval(interval);
//      document.getElementById('timer').innerHTML = "Times Up!";
//     }


// }, 1000);
////////////////////////try 3 /////////////////////////////////

function startTimer(){
var dateEntered = document.getElementById("eventDate").value;

// Set the date we're counting down to
var countDownDate = new Date(dateEntered).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get todays date and time
var now = new Date().getTime();

// Find the distance between now an the count down date
var remainingTime = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

// Display the result in the element with id="timer"
document.getElementById("timer").innerHTML = "Time left: </br>" + days + " Days, </br>" + hours + " hours  " + minutes + " minutes  " + seconds + " seconds";


//If the count down is finished, write some text
if (remainingTime < 0) {
clearInterval(x);
document.getElementById("timer").innerHTML = "EXPIRED";
}
}, 1000);
}