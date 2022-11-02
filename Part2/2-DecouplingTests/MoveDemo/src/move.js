// import Skateboard from '../src/skateboard.js';
// import Car from '../src/car.js';
// import Plane from '../src/plane.js';

const move = (vehicle) => {
	
	// reportDistanceAfterMove is a property not a function here
	return vehicle?.reportDistanceAfterMove ? vehicle.reportDistanceAfterMove() : `Not a Vehicle`;

    // if (vehicle instanceof Skateboard) {
    //   return "moved 100m";
    // }

    // if (vehicle instanceof Car) {
    //   return "moved 1000m";
    // }

    // if (vehicle instanceof Plane) {
    //   return "moved 10000m";
    // }
}

export default move;