function playGame() {
  let body = document.querySelector("main");
  let span = document.getElementById("playSpan");
  let play = document.getElementById("play");
  play.addEventListener("click", () => body.removeChild(span));
}

playGame();
