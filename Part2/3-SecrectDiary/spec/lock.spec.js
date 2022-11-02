import Lock from "../src/lock.js";

describe(`Lock tests`, () => { 

    it(`Locked is true`, () => { 
        // // Arrange
        // const testTest = new Lock();
        // // Act
        // const actual = testTest.isLocked();
        // // Assert
        // expect(actual).toBeTrue();

        // Simple write style
        expect(new Lock().isLocked()).toBeTrue();
    })

    it(`locked is false after unlock`, () => { 
        // Arrange
        const testLock = new Lock()
        // Act
        testLock.unlock()
        // Assert
        expect(testLock.isLocked()).toBeFalse();
    })

    it(`locked is true after lock`, () => {
        // Arrange
        const testLock = new Lock(false)
        // Act
        testLock.lock()
        // Assert
        expect(testLock.isLocked()).toBeTrue();
    })

})