// What is class and why do we want them?
// A data-structure definition

class Basket {
    // Define any properties an individual basket should have
    basketList;
    capacity;

    // If needed define a constructor function...
    // constructor just like Python 'def inital...'
    constructor(basketList = [], capacity = 0) {
        this.basketList = basketList;s
        this.capacity = capacity;
    }

    // Define class behaviours (methods)
    add(item) {
        this.basketList.push(item);
    }

    printBasketList() {
        for (let item of this.basketList) {
            console.log(item.id);
        }
    }
}

const myFunc = () => 10;
function myFunc2() {
    return 20;
}


//----------------------- Test--------------------//
const basket1 = new Basket();
basket1.add({ id: `item1` });
basket1.add({ id: `item2` });
console.log(basket1.basketList);

const basket2 = new Basket();
console.log(basket2.capacity);

// There use 'Position Arguments'
const basket3 = new Basket(undefined, 5);
console.log(basket3.capacity);

basket1.printBasketList();
