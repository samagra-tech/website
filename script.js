const messages = [
  "Problems are connected. Solve the root cause, not just the symptoms.",
  "Big impact needs a big picture. Solve beyond the local.",
  "Interconnected problems need integrated solutions.",
  "Fragmented solutions don’t work. Think big, act smart.",
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
