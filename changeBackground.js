var today = new Date();
var hours = today.getHours();

var button = document.getElementById("checkTimeBtn");

button.addEventListener('click', function() {
    //Early Morning
    if(hours < 5) {
        document.body.style.backgroundColor = "rgb(0, 0, 34)";
    }

    //Morning
    else if(hours < 9) {
        document.body.style.backgroundColor = "rgb(213, 171, 6)";
    }

    //Afternoon (Middle of the day)
    else if(hours < 18) {
        document.body.style.backgroundColor = "rgb(240, 220, 69)";
    }

    //Evening
    else if(hours < 20) {
        document.body.style.backgroundColor = "rgb(240, 145, 3)";
    }

    //Night
    else if(hours <= 24) {
        document.body.style.backgroundColor = "rgb(20, 20, 138)";
    }

    //Late Night
    else if(hours < 4) {
        document.body.style.backgroundColor = "rgb(0, 0, 34)";
    }
})

console.log(hours);