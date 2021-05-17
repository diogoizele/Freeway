function setup() {
  createCanvas(500, 400);
  setTimeout(() => {
    soundtrackSound.loop();
  }, 3000);
}

function draw() {
  background(highWayImg);
  drawCow();
  movementCow();
  drawAndMovementCars();
  scorePoint();
}
