class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
  }
}

const rayCount = 5;
const rayLength = 100;
const raySpread = Math.PI / 2;
console.log(raySpread);

const car = new Car((x = 0), (y = 0));
car;
let rays = [];

function update() {
  rays = [];
  for (let i = 0; i < rayCount; i++) {
    const rayAngle = lerp(raySpread / 2, -raySpread / 2, i / (rayCount - 1));
    rayAngle;
    const start = { x: car.x, y: car.y };
    start;
    const end = {
      x: car.x - Math.sin(rayAngle) * rayLength,
      y: car.y - Math.cos(rayAngle) * rayLength,
    };
    end;
    // rays.push([start, end]);

    rays = [...rays, [start, end]];
  }
}

function lerp(A, B, t) {
  return A + (B - A) * t;
}

update();

rays;
