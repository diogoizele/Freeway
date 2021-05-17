class Car {
  constructor(x, y, speed, width = 60, height = 35) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = width;
    this.height = height;
  }

  movement() {
    if (this.speed > 0) {
      this.x += this.speed;
      if (this.x > width) {
        this.x = -this.width;
      }
    } else if (this.speed < 0) {
      this.x += this.speed;
      if (this.x < 0 - this.width) {
        this.x = width;
      }
    }
  }
}
