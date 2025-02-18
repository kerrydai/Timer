// index.js - Enhanced with particle animation
const springBreakDate = new Date('March 15, 2024 00:00:00').getTime();

// Create floating particles
function createParticles() {
  const container = document.querySelector('.floating-shapes');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.width = particle.style.height = Math.random() * 4 + 2 + 'px';
    particle.style.background = `rgba(255,${Math.random() * 100 + 155},${Math.random() * 100},0.7)`;
    particle.style.borderRadius = '50%';
    particle.style.animation = `float ${Math.random() * 10 + 10}s infinite linear`;
    container.appendChild(particle);
  }
}

createParticles();

// Existing countdown logic with added celebration effect
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
    // Add celebration confetti
    createParticles();
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);