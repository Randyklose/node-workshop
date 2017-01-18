function setIntervals (callback, milliseconds) {
    setTimeout(function() {
        callback();
        setInterval(callback, milliseconds);
    }, milliseconds);
}

setIntervals(function(){console.log("forever")}, 1000);

