function countdown () {

	const event = document.getElementById('event');
	const eventDate = document.getElementById('eventDate');
	const eventHour = document.getElementById('eventHour');
	const eventMinute = document.getElementById('eventMinute');
	const eventAmPm = document.getElementById('eventAmPm');


//get event time and set default time if only date
var eventDate = new Date().getTime();
// get the current time
var now = new Date().getTime();

// differenc between current time and event time
var difference = eventDate - now;

// display days,hours,minutes, seconds to event time


// update every second
(function () {

}, 1000);

//message when timer is completed


}
