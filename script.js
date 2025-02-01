// Ensure this action only happens once.
let clicked = false;

// Utility function to check if a new bubble overlaps with any already placed bubble.
// 'bubbles' is an array of objects with { x, y, r } (center and radius).
function checkCollision(bubbles, x, y, r) {
  for (let b of bubbles) {
    let dx = b.x - x;
    let dy = b.y - y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    // Consider them colliding if distance is less than the sum of radii plus a small margin (e.g., 5px)
    if (distance < b.r + r + 20) {
      return true;
    }
  }
  return false;
}

// Listen for clicks on the center circle container.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("circle").addEventListener("click", function () {
    if (clicked) return;
    clicked = true;

    // Stop the pulsating animation on the center circle.
    document.querySelector("circle").style.animation = "none";

    // Array to store final bubble positions for collision checking.
    let placedBubbles = [];
    const bubbleCount = 100; // Increase the number of bubbles

    for (let i = 0; i < bubbleCount; i++) {
      let bubble = document.createElement("div");
      bubble.classList.add("bubble");

      // Random size between 10px and 50px
      let size = Math.random() * 60 + 20;
      bubble.style.width = size + "px";
      bubble.style.height = size + "px";
      let radius = size / 2;

      // Determine a non-overlapping random final position for the bubble.
      // Use the viewport dimensions:
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      let finalX, finalY;
      let attempts = 0;
      do {
        finalX = Math.random() * (vw - size) + radius;
        finalY = Math.random() * (vh - size) + radius;
        attempts++;
      } while (
        checkCollision(placedBubbles, finalX, finalY, radius) &&
        attempts < 100
      );

      // Save this bubble's final position info.
      placedBubbles.push({ x: finalX, y: finalY, r: radius });

      // Position the bubble initially at the center of the viewport.
      bubble.style.left = "50%";
      bubble.style.top = "50%";

      document.body.appendChild(bubble);

      // Force reflow to ensure the initial styles are applied.
      bubble.offsetWidth;

      // Calculate translation values from the center of the screen to the final position.
      let translateX = finalX - vw / 2;
      let translateY = finalY - vh / 2;

      // Animate the bubble: move it outward to its final position and scale it to full size.
      bubble.style.transform = `translate(${translateX}px, ${translateY}px) scale(1)`;
    }
  });
});
