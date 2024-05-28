function showAge() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    let date = new Date();
    let newDay = date.getDate();
    let newMonth = 1 + date.getMonth();
    let newYear = date.getFullYear();

    let allMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(day <= 31 && month <=12){
        if(day > newDay){
            newDay += allMonths[newMonth - 1];
            newMonth-- ;
        }

        if(month > newMonth){
            newMonth += 12;
            newYear-- ;
        }

        let finalDay = newDay - day;
        let finalMonth = newMonth - month;
        let finalYear = newYear - year;

        document.getElementById("age").style.display = "block";
        document.getElementById("age").innerHTML = "Your age is " + finalYear + " Years " + finalMonth + " Months " + finalDay + " Days.";

    }else if(day > 31){
        document.getElementById("age").style.display = "block";
        document.getElementById("age").style.color = "rgba(153, 32, 32, 0.896)";
        document.getElementById("age").innerHTML = "Please Make Sure About Your Day : " + day + ".";
    }else if(month > 12){
        document.getElementById("age").style.display = "block";
        document.getElementById("age").style.color = "rgba(153, 32, 32, 0.896)";
        document.getElementById("age").innerHTML = "Please Make Sure About Your Month : " + month + ".";
    }
}

function hideAge() {
    document.getElementById("age").style.display = "none";
}