// index.js
const springBreakDate = new Date('March 15, 2024 00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = springBreakDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = `
      <h2 style="color: #ffd700; text-shadow: 0 0 20px #ffd700;">🎉 SPRING BREAK IS HERE! 🎉</h2>
    `;
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);