// index.js
// Set your Spring Break date properly (YYYY, MM-1, DD)
const springBreakDate = new Date(Date.UTC(2025, 2, 28)); // March 15, 2024 (months are 0-indexed)

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = springBreakDate - now;

  // Only update if time left is positive
  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  } else {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = `
      <h2 style="color: #ffd700; text-shadow: 0 0 20px #ffd700;">🎉 SPRING BREAK IS HERE! 🎉</h2>
    `;
  }
}

// Initial call to prevent initial delay
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

// Debugging logs
console.log("Current UTC time:", new Date().toISOString());
console.log("Spring Break UTC time:", springBreakDate.toISOString());