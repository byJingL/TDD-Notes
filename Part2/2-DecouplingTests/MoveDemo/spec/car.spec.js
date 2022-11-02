import Car from "../src/car.js";

it(`Car report move test`, () => {
    // Arrange
    // Act
    // Assert
    expect(new Car().reportDistanceAfterMove()).toBe(`moved 1000m`);
})
