function changeSource() {
    console.log(`change source`);
}

function itsNight() {
    let hour = new Date;
    hour = hour.getHours()
    
    console.log(hour);
    if (( hour % 23) == 0) {
        console.log('its night');
        changeSource();
    } else {
        console.log('its day');
    }

}

setInterval(changeSource, 10000);

setInterval(itsNight, 60 * 60 * 1000);