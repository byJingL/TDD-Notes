const { assertEquals } = require("../bobs-bagels/testing-framework");

console.log(assertEquals([1, 2, 3], [1, 2, 3])) //False
// The result is False!

// JavaScript arrays are objects and hence reference(address) is checked and not values.
// Compare Method 1: toString()
// Compare Method 2: loop through
