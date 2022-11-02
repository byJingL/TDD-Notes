import SecretDiary from "../src/secretdiary.js";


describe('SecretDiary tests', () => { 

    // just chose one way, and every way can be bring out

    // Solution1 - (Class stub or test ywo) to Decoupling spec
    // this class defination can in or out sub-describe
    class TestLock {
        isLocked() { return true };
    }
    describe(`Using class stub: Default SecretDiary Tests`, () => {
        it(`should report locked`, () => {
            // Arrange
            const testDiary = new SecretDiary(new TestLock());
            // Act
            const actual = testDiary.getLockStatus();
            // Assert
            expect(actual).toBeTrue();
        })
    })
    // Solution2 - (MOCK) to Decoupling spec
    describe(`Using MOCK: Default SecretDiary Tests`, () => {
        const mockLock = {
            isLocked: () => true,
        }
        it(`should report locked`, () => {
            // Arrange
            const testDiary = new SecretDiary(mockLock);
            // Act
            const actual = testDiary.getLockStatus();
            // Assert
            expect(actual).toBeTrue();
        })
    })
    // Solution3 - Using spy
    describe(`Using Spy: Default SecretDiary Tests`, () => {
        const mockLock = {
            isLocked: () => true,
        }
        it(`Spy on islocked function`, () => {
            // Arrange
            const testDiary = new SecretDiary(mockLock);
            const mockLockSpy = spyOn(mockLock, `isLocked`);
            // Act
            testDiary.getLockStatus();
            // Assert
            expect(mockLockSpy).toHaveBeenCalledTimes(1);
        })
    })
    // Solution 2 and 3 together
    describe(`MOCK and SPY: Default SecretDiary Tests`, () => {

        const mockLock = {
            isLocked: () => true,
        }
        let testDiary;
        // Will run before each `it` call
        beforeEach(() => {
            testDiary = new SecretDiary(mockLock);
        })
        // Will run after each it call: Clean Up
        afterEach(() => {
            testDiary = undefined;
        })

        it(`should report locked`, () => {
            // Arrange done in beforeEach
            // Act
            const actual = testDiary.getLockStatus();
            // Assert
            expect(actual).toBeTrue();
        })
        it(`Spy on secret diary locked`, () => {
            // Arrange done in beforeEach
            // Act
            const mockLockSpy = spyOn(mockLock, `isLocked`);
            testDiary.getLockStatus();
            // Assert
            expect(mockLockSpy).toHaveBeenCalledTimes(1);
        })
    })


    describe(`Diary Locked Tests`, () => {
        const mockLock = {
            isLocked: () => true,
        }
        let testDiary;
        beforeEach(() => {
            testDiary = new SecretDiary(mockLock);
        })
        afterEach(() => {
            testDiary = undefined;
        })

        it(`should return error when getEntries is called and diary is locked`, () => {
            // Arrange
            // Act
            // Assert
            expect(() => { testDiary.getEntries() }).toThrowError(`Diary is locked`);
        })
        it(`should return error when addEntry is called and diary is locked`, () => {
            // Arrange
            // Act
            // Assert
            expect(() => { testDiary.addEntry() }).toThrowError(`Diary is locked`);
        })
    })

    describe(`Unlocking Tests`, () => { 
        const mockLock = {
            isLocked: function() {return true}, // Default value
            unlock: function () { this.isLocked = () => false},
        }
        let testDiary;
        beforeEach(() => {
            testDiary = new SecretDiary(mockLock);
        })
        afterEach(() => {
            testDiary = undefined;
        })

        it(`should unlock the diary when unlock is called`, () => { 
            // Arrange
            // Act
            testDiary.unlock();
            // Assert
            expect(testDiary.getLockStatus()).toBeFalse();

        })
        it(`should call unlock function  once`, () => { 
            // Arrange
            const unlockSpy = spyOn(mockLock, `unlock`);
            // Act
            testDiary.unlock();
            // Assert
            expect(unlockSpy).toHaveBeenCalledTimes(1);
        })
    })

    describe(`Get Entries and Add entry tests`, () => { 
        const mockLock = { 
            isLocked: () => false,
        };
        const mockEntry = {
            getContent: function () { return { 'date': '2022-10-08', 'text': 'xxxxxx' } },
        }
        let testDiary;
        beforeEach(() => {
            testDiary = new SecretDiary(mockLock);
        })
        afterEach(() => {
            testDiary = undefined;
        })

        it(`should return an empty array when getEntries is called`, () => {
            // Arrange
            // Act
            // Assert
            expect(testDiary.getEntries()).toHaveSize(0);
        })
        it(`should return add 1 to the length of array entries afer call addEntry`, () => {
            // Arrange
            // Act
            testDiary.addEntry(mockEntry);
            // Assert
            expect(testDiary.getEntries()).toHaveSize(1);
        })
        it(`should have the testEntry item in the entries array`, () => {
            // Arrange
            // Act
            testDiary.addEntry(mockEntry);
            let entryDate = testDiary.getEntries()[0].getContent();
            // Assert
            expect(entryDate).toEqual(mockEntry.getContent());
        })

    })

    describe(`Locking Tests`, () => {
        const mockLock = {
            isLocked: function () { return false }, // Default value
            lock: function () { this.isLocked = () => true},
        }
        let testDiary;
        beforeEach(() => {
            testDiary = new SecretDiary(mockLock);
        })
        afterEach(() => {
            testDiary = undefined;
        })

        it(`should unlock the diary when unlock is called`, () => {
            // Arrange
            // Act
            testDiary.lock();
            // Assert
            expect(testDiary.getLockStatus()).toBeTrue();

        })
        it(`should call unlock function  once`, () => {
            // Arrange
            const unlockSpy = spyOn(mockLock, `lock`);
            // Act
            testDiary.lock();
            // Assert
            expect(unlockSpy).toHaveBeenCalledTimes(1);
        })
    })

})
