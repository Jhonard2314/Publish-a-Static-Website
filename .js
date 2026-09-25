// 1. LIVE CLOCK
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  if (hours === 0) hours = 12;

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  document.getElementById("live-clock").textContent =
    "Current Time: " + hours + ":" + minutes + ":" + seconds + " " + ampm;
}

setInterval(updateClock, 1000);
updateClock();


// 2. COUNTDOWN TIMER
const eventDate = new Date("2026-10-21T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.getElementById("countdown").textContent = "The event has arrived!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("cd-days").textContent = days;
  document.getElementById("cd-hours").textContent = hours;
  document.getElementById("cd-minutes").textContent = minutes;
  document.getElementById("cd-seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();


// 3. INTERACTIVE BUTTON
const tips = [
  "Let your eyes adjust to the dark for 20 minutes before observing.",
  "Use a red flashlight instead of a phone light to protect your night vision.",
  "Jupiter's moons are visible with regular binoculars.",
  "Meteor showers are best seen with the naked eye, not a telescope.",
  "Cold, clear nights usually have the steadiest skies."
];

document.getElementById("tip-button").addEventListener("click", function () {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tip-output").textContent = randomTip;
});