// After Delete import thing
// What need to pass to move to make it do the supposed thing
// It needs an object that has a `reportDistanceAfterMove()` method which returns a String

import move from "../src/move.js";

// Test Double (or a class stub) or a MOCK
class TestVehicle { 
    reportDistanceAfterMove = (vehicle) => { 
        `test vehicle moved`;
    }
}
class TestNotVehicle { }

describe(`Not vehicle test`, () => { 
    it(`test not a vehicle`, () => { 
        expect(move(new TestNotVehicle)).toContain(`Not a Vehicle`);
    })
})

describe(`Vehicle move tests`, () => { 
    it(`test move return`, () => { 
        // Arrange
        const testVehicle = new TestVehicle();
        // Act
        const actual = move(testVehicle);
        // Assert
        expect(actual).toBe(testVehicle.reportDistanceAfterMove())
    })

    it(`test move calla test vhicle report method using SPY`, () => {
        // Arrange
        const testVehicle = new TestVehicle();
        // spyOn is a Jasmine function that allows me to assert on methods in an object
        const spyOnReportFn = spyOn(testVehicle, `reportDistanceAfterMove`);
        // Act
        move(testVehicle);
        // Assert
        // Expect this SPY on function has to been called when code be excuted to there
        expect(spyOnReportFn).toHaveBeenCalled();
        // Time shou be right
        expect(spyOnReportFn).toHaveBeenCalledTimes(1);
        expect(spyOnReportFn).toHaveBeenCalledWith();
    })

})
