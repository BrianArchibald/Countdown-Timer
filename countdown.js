function hide() {

   	document.getElementById("eventAndSubmit").style.display = "none";
 
};

function startTimer(){
    var dateEntered = document.getElementById("eventDate").value;
    var event = document.getElementById("event").value;

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
    document.getElementById("timer").innerHTML = "Time left until " + event + "</br>" + days + " Days " + hours + " Hours  " + minutes + " Minutes  " + seconds + " Seconds";

    //If the count down is finished, write some text
    if (remainingTime < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
}

