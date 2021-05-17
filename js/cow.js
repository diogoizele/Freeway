const cow = {
  x: 100,
  y: 372,
  width: 30,
  height: 25,
  speed: 2,
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
