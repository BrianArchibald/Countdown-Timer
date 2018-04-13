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

var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

document.getElementById("timer").innerHTML = "Time left: </br>" + days + " Days, </br>" + hours + " hours  " + minutes + " minutes  " + seconds + " seconds";

//If the count down is finished, write some text
if (remainingTime < 0) {
clearInterval(x);
document.getElementById("timer").innerHTML = "EXPIRED";
}
}, 1000);

}
function hide() {

   	var el = document.getElementById("eventAndSubmit");

     el.style.display = 'none';

};