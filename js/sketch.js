function setup() {
  createCanvas(500, 400);
  soundtrackSound.loop();
}

function draw() {
  background(highWayImg);
  drawCow();
  movementCow();
  drawAndMovementCars();
  scorePoint();
}
