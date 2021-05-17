const cars = [
  new Car(-60, 335, 2),
  new Car(-60, 291, 2),
  new Car(-60, 249, 2),
  new Car(-60, 208, 2),
  new Car(500, 32, -2),
  new Car(500, 75, -2),
  new Car(500, 118, -2),
  new Car(500, 159, -2),
];

function drawCars() {
  cars.forEach((car, index) => {
    image(carsImg[index], car.x, car.y, car.width, car.height);
    car.movement();
  });
}
