class Car {
  constructor(x, y, speed, width = 60, height = 35) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = width;
    this.height = height;
  }

  movement() {
    const getRandomSpeed = (min, max) => {
      return Math.random() * (max - min + 1) + min;
    };
    if (this.speed > 0) {
      this.x += this.speed;
      if (this.x > width) {
        this.x = -this.width;
        this.speed = getRandomSpeed(1.6, 4.5);
      }
    } else if (this.speed < 0) {
      this.x += this.speed;
      if (this.x < 0 - this.width) {
        this.x = width;
        this.speed = -getRandomSpeed(1.6, 4.5);
      }
    }
  }
}
