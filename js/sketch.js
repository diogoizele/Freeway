function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(highWayImg);
  drawCow();
  movementCow();
  drawAndMovementCars();
  scorePoint();
}
