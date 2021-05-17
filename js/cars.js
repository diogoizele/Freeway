const cars = [
  new Car(-60, 335, 1.8),
  new Car(-60, 291, 2.4),
  new Car(-60, 249, 4.2),
  new Car(-60, 208, 3),
  new Car(500, 32, -4),
  new Car(500, 75, -2.1),
  new Car(500, 118, -3.7),
  new Car(500, 159, -2),
];

function drawCars() {
  cars.forEach((car, index) => {
    image(carsImg[index], car.x, car.y, car.width, car.height);
    car.movement();
  });
}
