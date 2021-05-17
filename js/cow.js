const cow = {
  x: 100,
  y: 372,
  width: 30,
  height: 25,
  speed: 2,
  collide: false,
  points: 0,
};

function drawCow() {
  image(cowImg, cow.x, cow.y, cow.width, cow.height);
}

function movementCow() {
  if (keyIsDown(UP_ARROW)) {
    cow.y -= cow.speed;
    if (cow.y < 0) {
      cow.y = 0;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    cow.y += cow.speed;
    if (cow.y > height - cow.height) {
      cow.y = height - cow.height;
    }
  }
}

function verifyCollision(car) {
  cow.collide = collideRectCircle(
    car.x,
    car.y,
    car.width,
    car.height,
    cow.x,
    cow.y,
    1
  );
  if (cow.collide) {
    if (cow.points > 0) {
      const pointSpan = document.querySelector(".points-text-value");
      cow.points--;
      renderPoints(pointSpan);
    }
    backTheInitialPosition();
    collisionSound.play();
  }
}

function backTheInitialPosition() {
  cow.y = 395;
}

function renderPoints(element) {
  element.textContent = cow.points;
}

function scorePoint() {
  const pointSpan = document.querySelector(".points-text-value");
  if (cow.y < 18) {
    backTheInitialPosition();
    cow.points++;
    renderPoints(pointSpan);
    pointSound.play();
  }
}
