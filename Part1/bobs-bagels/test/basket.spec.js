const { Basket } = require("../src/basket");
const { assertEquals } = require("../testing-framework");

let expected;
let actual;
let result;
let basket;
let item;

// Test 1 - is anything added?
console.log(`----------------------`);
console.log(`Test 1 - Add item to the basket`)
// Arrange
basket = new Basket();
item = { id: `item1` };
expected = 1;
// Act
basket.add(item);
actual = basket.basketItems.length;
// Assert
result = assertEquals(expected, actual);
console.log(`Test 1 Item added to the basket is ${result}`)
// Clean up
expected = undefined;
actual = undefined;
result = undefined;
basket = undefined;
item = undefined;


// Test 2 - is anything moved?
console.log(`----------------------`);
console.log(`Test 2 - Move item from the basket`);
// Arange
basket = new Basket();
basket.add({ id: `item1` });
basket.add({ id: `item2` });
console.log(basket.basketItems.length);
item = { id: `item1` };
expected = 1;
// Act
basket.remove(item);
actual = basket.basketItems.length;
// Assert
result = assertEquals(expected, actual)
console.log(`Test 2 Item moved from the basket is ${result}`)
// Clean up
expected = undefined;
actual = undefined;
result = undefined;
basket = undefined;
item = undefined;


// Test 3 - is the basket full?
console.log(`----------------------`);
console.log(`Test 3 - The basket is full.`);
// Arange
basket = new Basket();
expected = true;
// Act
basket.add({ id: `item1` });
basket.add({ id: `item2` });
basket.basketCapacity = 2;
actual = basket.isBasketFull()
// Assert
result = assertEquals(expected, actual)
console.log(`Test 3 The basket is full: ${result}`)
// Clean up
expected = undefined;
actual = undefined;
result = undefined;
basket = undefined;
item = undefined;

// Test 4 - large the capasity of basket
console.log(`----------------------`);
console.log(`Test 4 - Large basket capacity.`);
// Arange
basket = new Basket();
expected = true;
// Act
actual = basket.largeBasketCapacity()
// Assert
result = assertEquals(expected, actual)
console.log(`Test 4 Large basket capacity: ${result}`)
// Clean up
expected = undefined;
actual = undefined;
result = undefined;
basket = undefined;
item = undefined;

// Test 5 - how many bagels?
console.log(`----------------------`);
console.log(`Test 5 - Total sum of bagels.\nTest [item1, item2, item3] => 3`);
// Arange
basket = new Basket();
basket.basketItems = [
    {id: `item1`},
    {id: `item2`},
    {id: `item3`},
]
expected = 3;
// Act
actual = basket.totalSumBagels()
// Assert
result = assertEquals(expected, actual)
console.log(`Test 5 Test [item1, item2, item3] => 3 is ${result}`)
// Clean up
expected = undefined;
actual = undefined;
result = undefined;
basket = undefined;
item = undefined;

// Test 6 - price of bagels?
console.log(`----------------------`);
console.log(`Test 6 - Check price of each bagel.\nTest [item1, item2, item3] => [3, 5, 7]`);
// Arange
basket = new Basket();
basket.basketItems = [
    {id: [`item1`, 3]},
    {id: [`item2`, 5]},
    {id: [`item3`, 7]},
]
expected = [3, 5, 7].toString();
// Act
actual = basket.checkPriceofBagel().toString()
// Assert
result = assertEquals(expected, actual)
console.log(`Test 6 Price of each bagel can be checked: ${result}`)
// Clean up
expected = undefined;
actual = undefined;
result = undefined;
basket = undefined;
item = undefined;

// Test 7 - if i try to remove an item that doesn't exist or add an item with the same ID already in?
console.log(`----------------------`);
console.log(`Test 7.1 - Test remove item2 from [item1] => false `);
// Arange
basket = new Basket();
basket.basketItems = [{id: `item1`},]
item = {id: `item2`}
expected = false
// Act
actual = basket.checkRemove(item)
// Assert
result = assertEquals(expected, actual)
console.log(`Test 7.1 Test remove item2 from [item1] => false: ${result}`)
// Clean up
expected = undefined;
actual = undefined;
result = undefined;
basket = undefined;
item = undefined;


console.log(`----------------------`);
console.log(`Test 7.2 - Test add item2 to [item1, item2] => true`);
// Arange
basket = new Basket();
basket.basketItems = [
    {id: `item1`},
    {id: `item2`},
]
item = {id: `item2`}
expected = true
// Act
actual = basket.checkAdd(item)
// Assert
result = assertEquals(expected, actual)
console.log(`Test 7.2 Test add item2 to [item1, item2] => true: ${result}`)
// Clean up
expected = undefined;
actual = undefined;
result = undefined;
basket = undefined;
item = undefined;
