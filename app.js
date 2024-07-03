var mar = 0;
var interval;
var car = document.getElementById("img");
var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton");
var screenWidth = window.innerWidth;
var carWidth = car.offsetWidth;
var cardistancefromend = 50; // Distance between car and screen edge

function start() {
    interval = setInterval(function () {
        if (mar >= screenWidth - carWidth - cardistancefromend) { // Stop before the screen edge with some distance
            stop();
            mar = 0;
        } else {
            mar += 10;
            car.style.marginLeft = mar + "px";
        }
    }, 100);

    startButton.disabled = true;
    stopButton.disabled = false;
}

function stop() {
    clearInterval(interval);
    startButton.disabled = false;
    stopButton.disabled = true;
}

// Responsive adjustments
window.addEventListener("resize", function () {
    screenWidth = window.innerWidth;
    carWidth = car.offsetWidth;
});
