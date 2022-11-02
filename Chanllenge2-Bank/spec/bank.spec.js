import Bank from "../src/bank.js";

describe('Bank Tests', () => { 
    const mockAccount = {
        getID: () => `Account1`,
    };
    let testBank;
    beforeEach(() => {
        testBank = new Bank();
    })
    afterEach(() => {
        testBank = undefined;
    })

    it(`should return an empty array when getAccount is called`, () => {
        // Arrange
        // Act
        // Assert
        expect(testBank.getAccounts()).toHaveSize(0);
    })
    it(`should return add 1 to the length of array accounts afer call addAccount`, () => {
        // Arrange
        // Act
        testBank.addAccount(mockAccount);
        // Assert
        expect(testBank.getAccounts()).toHaveSize(1);
    })
    it(`should have the mockAccount item in the accounts array`, () => {
        // Arrange
        // Act
        testBank.addAccount(mockAccount);
        let accountId = testBank.getAccounts()[0].getID();
        // Assert
        expect(accountId).toEqual(mockAccount.getID());
    })
})