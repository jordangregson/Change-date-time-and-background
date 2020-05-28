var today = new Date();
var month = today.getMonth();
var day = today.getDate();
var year = today.getFullYear();

var button = document.getElementById("checkTimeBtn");

button.addEventListener('click', function(){

    var date;

    if(month == 2){
        month = "January";
    }

    if(month == 3){
        month = "February";
    }

    if(month == 4){
        month = "March";
    }

    if(month == 5){
        month = "April";
    }

    if(month == 6){
        month = "May";
    }

    if(month == 7){
        month = "June";
    }

    if(month == 8){
        month = "July";
    }

    if(month == 9){
        month = "August";
    }

    if(month == 10){
        month = "September";
    }

    if(month == 11){
        month = "October";
    }

    if(month == 12){
        month = "November";
    }

    if(month == 13){
        month = "December";
    }
    
    date = month + " " + day + ", " + year;

    console.log(month);
    var elDate = document.getElementById("date");
    elDate.innerHTML = date;
    //elDate.textContent =
})

