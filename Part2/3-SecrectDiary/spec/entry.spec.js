import Entry from "../src/entry.js"

describe(`Entry Tests`, () => {

    it(`should return the id of the Entry`, () => { 
        // Arrange
        const testContent = { 'date': '2022-10-08', 'text': 'xxxxxx' };
        const testEntry = new Entry(testContent);
        // Act
        // Assert
        expect(testEntry.getContent()).toEqual({ 'date': '2022-10-08', 'text': 'xxxxxx' });
    })
})