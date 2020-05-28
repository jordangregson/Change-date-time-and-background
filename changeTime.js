var today = new Date();
var hour = today.getHours();
var minutes = today.getMinutes();


button.addEventListener('click', function () {
    var amPm = (hour >= 12) ? " PM" : " AM";//sets AM and PM

    minutes = ("0" + minutes).slice(-2);//adjust the minutes

    var twelveHourClock = (hour > 12) ? hour - 12 : hour;

    time = twelveHourClock + ":" + minutes + amPm;

    var elTime = document.getElementById("time");
    elTime.innerHTML = time;

})

