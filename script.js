const messages = [
  "Gears are turning, magic is happening. Stay close.",
  "Secrets are being crafted. All will be revealed soon.",
  "You’re early… but trust us, it’ll be worth the wait",
  "We’re cooking up something special. Stay tuned.",
  "We’re working on it. Check back soon!",
];

function getMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}
document.addEventListener("DOMContentLoaded", () => {
  const messageElement = document.getElementById("message");
  if (messageElement) {
    messageElement.textContent = getMessage();
  }
});
