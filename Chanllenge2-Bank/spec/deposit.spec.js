import Deposit from "../src/deposit.js";


describe(`Deposit Tests`, () => {

    it(`should return the detail of the deposit`, () => {
        // Arrange
        const testAmount = 1000;
        const testDeposit = new Deposit(testAmount);
        // Act
        // Assert
        expect(testDeposit.getDeposit()).toEqual([`09/10/2022`, 1000]);
    })
})