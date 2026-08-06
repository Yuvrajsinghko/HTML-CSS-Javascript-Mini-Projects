const lerp = (a, b, n) => (1 - n) * a + n * b;
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
const dist = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);

const cursor = document.querySelector(".cursor");

let mouseX = 9999;
let mouseY = 9999;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

let cx = mouseX,
  cy = mouseY,
  lastX = mouseX,
  lastY = mouseY;

function animate() {
  // move the cursor toward the real cursor a little each frame -> the "lag"
  cx = lerp(cx, mouseX, 0.18);
  cy = lerp(cy, mouseY, 0.18);

  // speed + direction from how far the mouse moved since last frame
  const vx = mouseX - lastX;
  const vy = mouseY - lastY;
  lastX = mouseX;
  lastY = mouseY;
  const speed = clamp(Math.hypot(vx, vy), 0, 40);
  const stretch = 1 + speed / 60;
  const angle = Math.atan2(vy, vx) * (180 / Math.PI);

  cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0) rotate(${angle}deg) scaleX(${stretch}) scaleY(${1 / (stretch * 0.4 + 0.6)}) `;

  requestAnimationFrame(animate);
}
animate();
