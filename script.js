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
// This is a placeholder date. Change it to match a real event you're
// counting down to, like a Prime Access release, an update, or a
// Baro Ki'Teer visit.
const eventDate = new Date("2026-10-15T00:00:00").getTime();

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
  "Use your Operator to revive yourself before going down completely.",
  "Sprint plus slide plus jump gives you the fastest movement in most tilesets.",
  "Affinity range matters - stay close to squadmates to level gear faster.",
  "Check the market's daily deals before spending platinum on anything.",
  "Nightwave challenges reset weekly, so log in often to keep up your standing."
];

const tipButton = document.getElementById("tip-button");
if (tipButton) {
  tipButton.addEventListener("click", function () {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("tip-output").textContent = randomTip;
  });
}