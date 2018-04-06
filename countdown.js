
//not sure if (eventDate) is correct below
function getTimeRemaining (eventDate)  {

	//var event = document.getElementById('event');
	var eventDate = document.getElementById('eventDate');
	//var eventHour = document.getElementById('eventHour');
	//var eventMinute = document.getElementById('eventMinute'); 
	//var eventSeconds = document.getElementById('eventSeconds');
	//var eventAmPm = document.getElementById('eventAmPm');


	var remainingTime = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (remainingTime/1000) % 60);
	var minutes = Math.floor( (remainingTime/1000/60) % 60);
	var hours = Math.floor( (remainingTime/(1000*60*60)) % 24);
	var days = Math.floor( remainingTime/(1000*60*60*24));

	return {
		'remainingTime' : remainingTime,
		'days' : days,
		'hours' : hours,
		'minutes' : minutes,
		'seconds' : seconds
	};
}

function startTimer (id, endtime) {
	var clock = document.getElementById(id);
	var timeInterval = setInterval(function() {
		var remainingTime = getTimeRemaining(endtime);
		clock.innerHTML =  'days: ' + remainingTime.days + '<br>' +
						   'hours: ' + remainingTime.hours + "<br>" +
						   'minutes: ' + remainingTime.minutes + '<br>' +
						   'seconds: ' + remainingTime.seconds;

		if(remainingTime.total <=0) {
			clearInterval(timeInterval);
		}
	},1000);
}


//get event time and set default time if only date
//var eventDate = new Date().getTime();
// get the current time
//var now = new Date().getTime();

// differenc between current time and event time
//var difference = eventDate - now;

// display days,hours,minutes, seconds to event time


// update every second

//message when timer is completed