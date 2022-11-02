



const Account = require("./Account");

// Const just lock the stack/heap of memory, not really what things in it
//account1 = `Hello World`; this can't work
const account1 = new Account(1, `je`, `123456`);
const account2 = new Account(2, `Mi`, `804594`, 100);

// It is bad I can directly change properties of class
console.log(account1, account2);

// After Private
/* Private field '#balance' must be declared in an enclosing class
console.log(account1.#balance); */
console.log(account2.getBalance());
console.log(account1.name); // 'get' only in Js

account1.name = `Ivy`;
console.log(account1.name); // 'je' can't be changed

account1.setBalance(90000);
account1.setBalance(600);
console.log(account1.getBalance()) // 600

// When transaction method is public
account1.transaction = 5000; // 'set' only in Js use '=' to assign parameters not '()'
console.log(account1.getBalance()); // 5600 -> 600
console.log(account1.transactions); //[600, 5000] -> [600]
// when transaction be private "#transaction" it just can be called in the class
// above result will not be that

// Another reason why we use private
account1.randomFiled = `asd`;
console.log(account1);
account1.randomFiled = {
    val1: `hi`,
    val2: `Uncontrold data`
}
console.log(account1);
// Compare with, `asd` can't be assigned in 
account1.setBalance(`asd`);
console.log(account1.getBalance());
