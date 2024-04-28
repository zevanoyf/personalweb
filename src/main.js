const inputEmail = document.getElementById("email");
const subscribeBtn = document.getElementById("subscribeBtn");
const confetti = require("canvas-confetti");

inputEmail.addEventListener("click", () => {
  //const email = inputEmail.value;

  var myCanvas = document.createElement("canvas");
  myCanvas.style.width = "100rw";
  myCanvas.style.height = "100vh";
  myCanvas.style.position = "fixed";
  myCanvas.style.inset = 0;
  myCanvas.style.zIndex = 9999;

  document.body.appendChild(myCanvas);

  const myConfetti = confetti.create(myCanvas, { resize: true });

  myConfetti({
    particleCount: 600,
    spread: 160,
  });
});
