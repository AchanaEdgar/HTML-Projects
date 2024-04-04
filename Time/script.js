let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let periodDisplay = document.getElementById("periodDisplay");
let is24HourFormat = true; // Initially set to 24-hour format

function updateTime() {
    let currentTime = new Date();

    if (is24HourFormat) {
        // Display time in 24-hour format
        hours.textContent = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    } else {
        // Convert to 12-hour format
        let hours12 = currentTime.getHours() % 12 || 12; // Convert 0 to 12
        hours.textContent = (hours12 < 10 ? "0" : "") + hours12;
    }

    minutes.textContent = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    seconds.textContent = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

    // Update AM/PM display
    periodDisplay.textContent = (currentTime.getHours() >= 12) ? "PM" : "AM";
}

// Update time every second
setInterval(updateTime, 1000);

document.getElementById("btn1").addEventListener("click", function() {
    // Toggle between 12-hour and 24-hour formats
    is24HourFormat = !is24HourFormat;

    // Change button label
    let button = document.getElementById("btn1");
    button.textContent = is24HourFormat ? "12-Hour Format" : "24-Hour Format";

    // Toggle visibility of period display
    periodDisplay.style.visibility = is24HourFormat ? "hidden" : "visible";

    // Update time immediately after format change
    updateTime();
});

// Initial update
updateTime();
