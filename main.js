// MAIN FUNCTION
function digitalClock() {
    // gets the Date library and store it in a variable
    let date = new Date();
    // the hour variable
    let h = date.getHours();
    // the minute variable
    let m = date.getMinutes();
    // the second variable
    let s = date.getSeconds();

    // the "AM" or "PM" variable
    let additionalInfo = "AM";

    // checks if the hour is equal to 0 
    if (h == 0) {
        // then changes it to 12
        h = 12;
    }

    // checks if the hour is more than 12 
    if (h > 12) {
        // then subtracts 12 from it and set it as the new "h" value
        h = h - 12;
        // also changes the "AM" to "PM"
        additionalInfo = "PM";
    }

    // apply the function that adds zero before numbers that are less than 10 to "h", "m", and "s"
    h = addZero(h);
    m = addZero(m);
    s = addZero(s);

    // stores all the time variables in one variable that is in a form of a digital clock 
    let time = h + ":" + m + ":" + s + " " + additionalInfo;

    // gets the element that the digital clock will be stored in and store it in a constant
    const displayTime = document.getElementById("digitalClock");
    // sets the digital clock container's innerText to the digital clock value
    displayTime.innerText = time;
    // since the Date function returns a static value, setTimeout is used to update its value (digitalClock function) by 1 second (1000 mili second = 1 second)
    setTimeout(digitalClock, 1000);
}

// ADDITIONAL FUNCTION
function addZero(o) {
    // it checks if any of the date numbers are less that 10
    if (o < 10) {
        // then it adds a "0" before them 
        o = "0" + o;
    }
    // returns the value
    return o;
}

// WINDOW LOADER
window.addEventListener("load", digitalClock);