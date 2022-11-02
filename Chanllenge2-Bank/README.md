# Part I. How to Install and Run
 Download all files in this [folder](/Chanllenge2-Bank/)
 Install project dependencies
 ```
 npm install
 ```
 Go to test folder and run all the test files
 ```
 cd spec
 npm test
 ```
 Go to sorce code file and run main file
 ```
 cd ../src
 node index.js
 ```

# Part III. Procedure
## Step1. Inital Setup
Intall dependencies follow the steps
```
npm init
```
```
npm i --save-dev jasmine
```
```
npx jasmine init
```
## Step2. Transfor Problem Statement to User Stories and Domain Models
### User Story 1
```
As a user,
I want to create a new account in my bank,
So that I can track my money.
```
Bank and Account should be two class
#### Domain Model
| Objects | Properties                | Messages     | Output  |
| ------- | ------------------------- | ------------ | ------- |
| Bank    | accounts @Array[@Account] | addAccount() | @Void   |
|         |                           | getAccount() | @Void   |
|         |                           |              |         |
| Account | id @String                | getID()      | @String |
|         | balance @Int              | getBalance() | @Int    |
|         |                           |              |         |
#### Tests
1. Test that a new instance of `Account` return the `id` 
2. Test that a new instance of `Account` return `balance`
3. Test that the initial `Bank` returns an array of 0 length
4. Test that calling `addAccount`  with an `Account` add 1 to the length of `accounts` 
5. Test that the actual account in the entries after it has been add

---
### User Story 2
```
As a user,
I want to be able to deposit money,
So that I can save money.
```
#### Domain Model
| Objects | Properties                    | Messages            | Output                |
| ------- | ----------------------------- | ------------------- | --------------------- |
| Bank    | accounts @Array[@Account]     | addAccount()        | @Void                 |
|         |                               | getAccounts()       | @Array[@Account]      |
|         |                               |                     |                       |
| Account | id @String                    | getID()             | @String               |
|         | balance @Int                  | getBalance()        | @Int                  |
|         | transactions @Array[@deposit] | getTransaction()    | @Array[@deposit]      |
|         |                               | doDeposit(@Deposit) | @Void                 |
|         |                               |                     |                       |
| Deposit | amount @int                   |                     |                       |
|         | date @String                  |                     |                       |
|         | deposit @Array[@date,@amount] | getDeposit()        | @Array[@date,@amount] |
|         |                               |                     |                       |
#### Tests
1. Test that `getDeposit` return detail of deposit
2. Test that the initial account `transactions` returns an array of 0 length
3. Test that calling `doDeposit`  with an `Deposit` add 1 to the length of `transactions`
4. Test that the actual deposit in the transactions after it has been add
---
### User Story 3
```
As a user,
I want to be able to withdrawal money,
So that I can spend money.
```
#### Domain Model
| Objects    | Properties                               | Messages                | Output                      |
| ---------- | ---------------------------------------- | ----------------------- | --------------------------- |
| Bank       | accounts @Array[@Account]                | addAccount()            | @Void                       |
|            |                                          | getAccounts()           | @Array[@Account]            |
|            |                                          |                         |                             |
| Account    | id @String                               | getID()                 | @String                     |
|            | balance @Int                             | getBalance()            | @Int                        |
|            | transactions @Array[@deposit@withdrawal] | getTransaction()        | @Array[@deposit@withdrawal] |
|            |                                          | doDeposit(@Deposit)     | @Void                       |
|            |                                          | doWithdrawal(@Withdraw) | @Void                       |
|            |                                          |                         |                             |
| Deposit    | amount @int                              |                         |                             |
|            | date @String                             |                         |                             |
|            | deposit @Array[@date,@amount]            | getDeposit()            | @Array[@date,@amount]       |
|            |                                          |                         |                             |
| Withdrawal | amount @int                              |                         |                             |
|            | date @String                             |                         |                             |
|            | withdrawal @Array[@date,@amount]         | getWithdrawal()         | @Array[@date,@amount]       |
|            |                                          |                         |                             |
#### Tests
1. Test that `getWithdrawal` return detail of deposit
2. Test that the initial account `transactions` returns an array of 0 length
3. Test that calling `doWithdrawal`  with an `@Withdraw` add 1 to the length of `transactions`
4. Test that the actual withdrawal in the transactions after it has been add
---
