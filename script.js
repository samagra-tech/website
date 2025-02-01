// Ensure this action only happens once.
let clicked = false;

// Listen for clicks on the center circle container.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("circle").addEventListener("click", function () {
    if (clicked) return;
    clicked = true;

    // Stop the pulsating animation on the center circle.
    document.querySelector("circle").style.animation = "none";

    // Create 20 bubble circles.
    for (let i = 0; i < 20; i++) {
      let bubble = document.createElement("div");
      bubble.classList.add("bubble");

      // Set a random size between 10px and 50px.
      let size = Math.random() * 40 + 10;
      bubble.style.width = size + "px";
      bubble.style.height = size + "px";

      // Position the bubble at the center.
      bubble.style.left = "50%";
      bubble.style.top = "50%";

      document.body.appendChild(bubble);

      // Force reflow so the initial styles are applied.
      bubble.offsetWidth;

      // Choose a random angle and distance.
      let angle = Math.random() * 2 * Math.PI;
      let distance = Math.random() * 200 + 50; // between 50px and 250px
      let translateX = Math.cos(angle) * distance;
      let translateY = Math.sin(angle) * distance;

      // Animate the bubble: move outward and grow to full size.
      bubble.style.transform = `translate(${translateX}px, ${translateY}px) scale(1)`;
    }
  });
});
