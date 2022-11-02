import Car from "./car.js";
import move from "./move.js";
import Plane from "./plane.js";
import Skateboard from "./skateboard.js";
import Spaceship from "./spaceship.js";

console.log(move(new Skateboard()));
console.log(move(new Car()));
console.log(move(new Plane()));
console.log(move(new Spaceship()));