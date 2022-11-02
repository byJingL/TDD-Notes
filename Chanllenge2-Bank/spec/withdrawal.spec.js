import Withdrawal from "../src/withdrawal.js";

describe(`Withdrawal Tests`, () => {

    it(`should return the detail of the withdrawal`, () => {
        // Arrange
        const testAmount = 1000;
        const testWithdrawal = new Withdrawal(testAmount);
        // Act
        // Assert
        expect(testWithdrawal.getWithdrawal()).toEqual([`09/10/2022`, -1000]);
    })
})