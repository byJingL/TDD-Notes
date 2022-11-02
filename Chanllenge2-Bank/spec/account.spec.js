import Account from "../src/account.js";

describe('Account Tests', () => {

    describe('Default Account Tests', () => { 
        
        let testAccount;
        beforeEach(() => {
            testAccount = new Account(`Account 1`);
        })
        afterEach(() => {
            testAccount = undefined;
        })

        it('should return the id of account', () => {
            // Arrange
            // Act
            // Assert
            expect(testAccount.getID()).toBe(`Account 1`);
        })
        it('should return the balance of account', () => {
            // Arrange
            // Act
            // Assert
            expect(testAccount.getBalabce()).toBe(0);
        })
    })

    describe('Deposit Tests', () => {
        const mockDeposit = {
            getDeposit: () => [`09/10/2022`, 1000],
        };
        let testAccount;
        beforeEach(() => {
            testAccount = new Account();
        })
        afterEach(() => {
            testAccount = undefined;
        })

        it(`should return an empty array when getTransaction is called`, () => {
            // Arrange
            // Act
            // Assert
            expect(testAccount.getTransaction()).toHaveSize(0);
        })
        it(`should return add 1 to the length of array accounts afer call doDeposit`, () => {
            // Arrange
            // Act
            testAccount.doDeposit(mockDeposit);
            // Assert
            expect(testAccount.getTransaction()).toHaveSize(1);
        })
        it(`should have the mockDeposit item in the Transaction array`, () => {
            // Arrange
            // Act
            testAccount.doDeposit(mockDeposit);
            let depositDetail = testAccount.getTransaction()[0];
            // Assert
            expect(depositDetail).toEqual(mockDeposit.getDeposit());
        })
    })

    describe('Withdrawal Tests', () => {
        const mockWithdrawal = {
            getWithdrawal: () => [`09/10/2022`, -1000],
        };
        let testAccount;
        beforeEach(() => {
            testAccount = new Account();
        })
        afterEach(() => {
            testAccount = undefined;
        })

        it(`should return an empty array when getTransaction is called`, () => {
            // Arrange
            // Act
            // Assert
            expect(testAccount.getTransaction()).toHaveSize(0);
        })
        it(`should return add 1 to the length of array accounts afer call doWithdrawal`, () => {
            // Arrange
            // Act
            testAccount.doWithdrawal(mockWithdrawal);
            // Assert
            expect(testAccount.getTransaction()).toHaveSize(1);
        })
        it(`should have the mockWithdrawal item in the Transaction array`, () => {
            // Arrange
            // Act
            testAccount.doWithdrawal(mockWithdrawal);
            let WithdrawalDetail = testAccount.getTransaction()[0];
            // Assert
            expect(WithdrawalDetail).toEqual(mockWithdrawal.getWithdrawal());
        })
    })
    
})