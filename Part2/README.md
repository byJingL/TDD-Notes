### Part3  
- JavaSript Syntax - Write function and arrow function
  ```
  isLocked: function(){return true}
  isLocked: () => true // if function just have one sentence
  
  ```
- Google "MDN Error Object", "MDN throw"  
- Throw Error object in src code and Test it using Jasmine Framework
    ```
    throw new Error(`Diary is locked`); <= src
    expect(() => { testDiary.addEntry() }).toThrowError(`Diary is locked`); <= spec
    ```
- Tricky Error in Jasmine Test Framwork:  
    In this `secretdiary.spec.js` sample, `const mockLockSpy = spyOn(mockLock, `isLocked`);` shou be in `it()` function, if not, will have bellow Error. 
    ```
    ERROR: 'DEPRECATION: describe with no children (describe() or it())

    This can happen if an error occurs before the code hits the inner describe or it functions. So the test code never reaches the inner functions.
    ```   
- Secret Diary Walkthrough - [SecretDiary](/3-SecrectDiary/) 
    - Decoupling `class`: SecretDiary and Lock should be two class
    - Decoupling `spec.js`: 
        - Class stub (Test double)
        - MOCK is very important (Most use!!!!)
        - Spy on function
    - Domain Modelling
    - Testing and Test Driven Development
    - Jasmine Testing Framework
    - Single Responsibility and Loosely Coupled Code
    - Testing and Mocking Strategies (to Loosely Coupled `spec` code)
  
### Part2  
- SingleResponsibility - Decoupling `spec.js` file- [MoveDemo](/2-DecouplingTests/MoveDemo/spec/move-decoupling.spec.js) 
    -  One spec file should import/test one class which need to be tested
    -  Each class should have own spec test file / One class One spec file
    -  Test Double (or a class stub) or a MOCK
       -  using a class stub create in `spec,js` file   
       -  using a SPY 
       -  using MOCK (Detailed in Day3)
- SingleResponsibility - Decoupling `class` - [MoveDemo](/2-DecouplingTests/MoveDemo/) 
    - SingleResponsibility - `move.spec.js` => `move-decoupling.spec.js`
    - `class Move` should have no import, import thing should in main-program `index.js` - Loosly coupling  
    - Check error in Jasmine Test
        ```
        Failures:
        1) move tests test Spaceship
            Message:
            Expected 'moved 10000m' to be 'moved 1000000m'.
        4 specs, 1 failure
        ```  
    - After refactor, should run test, then push to Github

- Jasmine Test Framework
    - Install: `description`: Demo for Jasmine and Decoupling; `entry point`: (index.js); `test command`: jasmine   
        Get `package.json` file
        ```
        npm init
        ```
        Get `node_modules` folder, `package-lock.js` file, 'devDependencies' in `package.json`
        ```
        npm install/i --save-dev jasmine // 
        ```
        Create `.gitignore` to ignore `node_modules` folder. When clone later, can use `npm install` to find it back (no deed to push to repo, but need to find it back because jasmine command in it)  
        ```
        **/node_modules/
        ```
        Get `spec` folder, Jasmine can look to this folder and find all `.spec.js` files, it means the terminal can in anywhere of MoveDemo
        ```
        npx jasmine init
        ```
    - Test file:  
        `describe` defines a suite of tests  
        `it` defines an individual test  
        `xdescribe` and `xit` can escape  
        - step1: `"type": "module",` add to `package.json`  
        - step2: Use ES Module rather than common JS module(requie thing)  
            - `module.exports = move;` => `export default move;` This way can export many classes andnfunctions  
            - `const Skateboard = require("../src/skateboard")` => `import { } from "module";`  
        - step3: Write test code follow the [Sample](https://jasmine.github.io/)

    - Run: need to in the project file
        ```
        npm test
        ```
- `npm`: node package manager; auto install with Node. Such as Jasmine, axios... 
- `package.json`: the recipe page for my project. it tells me about all the external ingredients that I need to be able to create and run my application
- `json`: javascript object notion
- Test Frameworks: structral output well, will not have input in the console
    - Jasmine -> help test Angular
    - Jest -> help test React
    - QUnit -> help test jQuery
    - Mocha -> help test Node.js
- Test code in Week1 is a liitle messy

### Part1 
- SingleResponsibility - Decoupling - [WalletDemo](/2-DecouplingTests/WalletDemo/)
    - Every class always have its own file
    - Tightly coupling: In one class import another class, it is not good 
      Loosly coupling: just import class in `index.js` file / `main` program in other language
    - Still coupling but decoupling
    - In this Demo `class Wallet` just have one responsibility: manage things
- SingleResponsibility - Encapsulation - [AccountDemo](/1-AccountDemo/)  
    - Private Acess of Class properties and methods
    - Getter and Setter methods
    - Meaning of Encapsulation:  
    which means that I hide away the behaviour of my object and I let other objects interact with it by either asking it to perform some of its behaviour with particular values or by asking it to change or show some of its properties by using getters or setters and I keep all of the properties private as a matter of just for forever.
    - Private properties can still be inspect in Debugging:  
    I can still inspect them in so it's just more about control rather than keeping information private. It's within the program and the idea is that we are and stopping other parts of the program directly accessing and changing things. 
    