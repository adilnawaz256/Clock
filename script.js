// Display current time
function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
    if (hours > 12) {
        hours = hours - 12;
        meridian = "PM";
    }
    if (hours == 0) {
        hours = 12;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var time = hours + ":" + minutes + ":" + seconds + " " + meridian;
    document.getElementById("clock").innerHTML = time;
    setTimeout("displayTime()", 1000);
}   
displayTime();
const body = document.querySelector('body');

