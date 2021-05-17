const cow = {
  x: 100,
  y: 372,
  width: 30,
  height: 25,
};

function drawCow() {
  image(cowImg, cow.x, cow.y, cow.width, cow.height);
}
