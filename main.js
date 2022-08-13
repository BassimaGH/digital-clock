function digitalClock() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let additionalInfo = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        additionalInfo = "PM";
    }

    h = addZero(h);
    m = addZero(m);
    s = addZero(s);

    let time = h + ":" + m + ":" + s + " " + additionalInfo;

    const displayTime = document.getElementById("digitalClock");
    displayTime.innerText = time;
    setTimeout(digitalClock, 1000);
}

function addZero(o) {
    if (o < 10) {
        o = "0" + o;
    }
    return o;
}

window.addEventListener("load", digitalClock);