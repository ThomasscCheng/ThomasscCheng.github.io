function callDate() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth()+1;
    var year = currentDate.getFullYear();
    var currentTime = day + "-" + month + "-" + year;
    var location = document.getElementById("currentDate").innerHTML;
    document.getElementById("currentDate").innerHTML = currentTime;
    setTimeout(callDate, 1000);
}

function callTime() {
    var currentDate = new Date();
    var second = currentDate.getSeconds();
    var minute = currentDate.getMinutes();
    var hour = currentDate.getHours();
    if (second < 10){
        second = "0" + second;
    }
    if (minute < 10){
        minute = "0" + minute;
    }
    if (hour < 10){
        hour = "0" + hour;
    }
    var currentTime = hour + ":" + minute + ":" + second;
    var location = document.getElementById("currentTime").innerHTML;
    document.getElementById("currentTime").innerHTML = currentTime;
    setTimeout(callTime, 1000);
}