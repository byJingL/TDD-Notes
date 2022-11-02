import Car from "../src/car.js";
import move from "../src/move.js"
import Plane from "../src/plane.js";
import Skateboard from "../src/skateboard.js"; 
import Spaceship from "../src/spaceship.js";


describe(`move tests`, () => {
    it(`test Skateboard`, () => {
        // Arrange
        const testVehicle = new Skateboard();

        // Act
        const result = move(testVehicle);

        // Assert
        expect(result).toBe(`moved 100m`);
    })

    it(`test Car`, () => {
        // Arrange
        const testVehicle = new Car();

        // Act
        const result = move(testVehicle);

        // Assert
        expect(result).toBe(`moved 1000m`);
    })

    it(`test Plane`, () => {
        // Arrange
        const testVehicle = new Plane();

        // Act
        const result = move(testVehicle);

        // Assert
        expect(result).toBe(`moved 10000m`);
    })

    it(`test Spaceship`, () => {
        // Arrange
        const testVehicle = new Spaceship;

        // Act
        const result = move(testVehicle);

        // Assert
        expect(result).toBe(`moved 1000000m`);
    })
})