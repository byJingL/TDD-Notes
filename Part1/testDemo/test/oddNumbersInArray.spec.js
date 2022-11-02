const { oddNumbersInArray } = require("../src/oddNumbersInArray");
const { assertEquals } = require("../testing-framework");


let input;
let expected;
let actual;
let result;

//----------------------Test 1------------------------//
console.log(`Test 1: Test [1, 2, 3, 4, 5, 6] => 3`);
// Arrange
input = [1, 2, 3, 4, 5, 6];
expected = 3;
// Act
actual = oddNumbersInArray(input);
// Assert
result = assertEquals(expected, actual);
console.log(`Test that: Test [1, 2, 3, 4, 5, 6] => ${actual} was ${result}`);
// Cleanup
expected = undefined;
actual = undefined;
result = undefined;

//----------------------Test 2------------------------//
console.log(`Test 2: Test [1, 1, 1, 1, 5, 6] => 5`);
// Arrange
input = [1, 1, 1, 1, 5, 6];
expected = 5;
// Act
actual = oddNumbersInArray(input);
// Assert
result = assertEquals(expected, actual);
console.log(`Test that: Test [1, 1, 1, 1, 5, 6] => ${actual} was ${result}`);

