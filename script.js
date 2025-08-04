document.addEventListener("DOMContentLoaded", function () {
  const text = "We’re building something exciting! Stay tuned!";
  const typingElement = document.getElementById("typing-text");
  let i = 0;

  function type() {
    if (i < text.length) {
      typingElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }

  setTimeout(type, 300);
});
