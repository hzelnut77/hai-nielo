const heartsContainer = document.getElementById('hearts');
function createHeart(x, y, scatter = false) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = (x || Math.random() * window.innerWidth) + 'px';
  heart.style.top = (y || window.innerHeight) + 'px';
  heart.style.animationDuration = (3 + Math.random() * 3) + 's';
  heart.style.opacity = 1;
  if (scatter) {
    heart.style.transition = 'transform 1s ease-out, opacity 1s';
    heart.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 1) * 200}px) scale(1.5)`;
    setTimeout(() => {
      heart.style.opacity = 0;
    }, 100);
  }
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(() => createHeart(), 800);
document.body.addEventListener('click', (e) => {
  for (let i = 0; i < 7; i++) {
    createHeart(e.clientX, e.clientY, true);
  }
});
