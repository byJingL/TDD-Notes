# Secret Diary

## Step1 - Problem Statement => User Story 

## Step2 - Domain Models
### User Story 1
```
As a user,
I want to find that a new secret diary is locked,
So that I have to unlock it to use it.
```
SecretDiary and Lock should be two class

| Objects     | Properties          | Messages       | Output   |
| ----------- | ------------------- | -------------- | -------- |
| SecretDiary | lock @Lock          | getLockState() | @Boolean |
| Lock        | lockStatus @Boolean | isLocked()     | @Boolean |
|             |                     |                |          |
#### Tests

1. Test that a new instance of `Lock` reports `lockStatus` is `true`
2. Test that the diary reports locked after instantiation; i.e. Expect `secretDiary.lock` to be `true`
3. Test that the diary calls the lock's `isLocked` method  
   
---

### User Story 2
```
As a user,
I want to see an error when trying to use a locked diary,
So that access to it is restricted when locked.
```
Diary must be locked  
getEntries should return an error  
Entries should return an error  
#### Domain Model

| Objects     | Properties | Messages       | Output   |
| ----------- | ---------- | -------------- | -------- |
| SecretDiary | lock @Lock | getLockState() | @Boolean |
|             |            | getEntries()   | @Error   |
|             |            | addEntry()     | @Error   |
|             |            |                |          |

#### Tests
1. Test that getEntries returns error when diary is locked
2. Test that addEntry returns error when diary is locked  
   
---
  
### User Story 3
```
As a user,
I want to unlock the diary,
So that I can use it
```
#### Domain Model

| Objects     | Properties          | Messages       | Output   |
| ----------- | ------------------- | -------------- | -------- |
| SecretDiary | lock @Lock          | getLockState() | @Boolean |
|             |                     | unlock()       | @Void    |
| Lock        | lockStatus @Boolean | isLocked()     | @Boolean |
|             |                     | unlock()       | @Void    |
|             |                     |                |          |

#### Tests
1. Test that `unlock` changes a `Lock` `lockStatus` to `false`
2. Test that `unlock` changes a `SecretDiary` `lock` to `false`

---

### User Story 4 (probably should have 5)

`getEntries` is needed to properly run these tests

```
As a user,
I want to be able to add entries to the diary when unlocked,
So that I can journal my life
```
#### Domain Model

| Objects     | Properties            | Messages         | Output   |
| ----------- | --------------------- | ---------------- | -------- |
| SecretDiary | lock @Lock            | getLockState()   | @Boolean |
|             |                       | getEntries()     | @Error   |
|             | entries@Array(@Entry) | addEntry(@Entry) | @Error   |
|             |                       |                  | @Void    |
| Lock        | lockStatus @Boolean   | isLocked()       | @Boolean |
|             |                       | unlock()         | @Void    |
| Entry       | content @Dict         | getContent()     | @Dict    |
|             |                       |                  |          |
#### Tests
1. Test that calling `addEntry`  with an `Entry` add 1 to the length of `enries` when the diary is unlocked
2. Test that the actual entry in the entries after it has been add

### User Story 5 (probably should have been done in 4)

```
As a user,
I want to be able to see all entries when the diary is unlocked,
So that I can reminisce
```

#### Domain Model

| Objects     | Properties             | Messages         | Output          |
| ----------- | ---------------------- | ---------------- | --------------- |
| SecretDiary | lock @Lock             | getLockState()   | @Boolean        |
|             | entries @Array[@Entry] | getEntries()     | @Error          |
|             |                        |                  | @Array[Entries] |
|             |                        | addEntry(@Entry) | @Error          |
|             |                        |                  | @Void           |
|             |                        | unlock()         | @Void           |
|             |                        |                  |                 |
| Lock        | lockStatus @Boolean    | isLocked()       | @Boolean        |
|             |                        | unlock()         | @Void           |
|             |                        |                  |                 |
| Entry       | content @Dict          | getContent()     | @Dict           |
|             |                        |                  |                 |

#### Test

1. Test that the initial diary returns an array of 0 length
2. Test that a populated array returns the length of the number of entries added

### User Story 6

```
As a user,
I want to be able to lock the diary,
So that other people can't use it
```

#### Domain Model

| Objects     | Properties             | Messages         | Output          |
| ----------- | ---------------------- | ---------------- | --------------- |
| SecretDiary | lock @Lock             | getLockState()   | @Boolean        |
|             | entries @Array[@Entry] | getEntries()     | @Error          |
|             |                        |                  | @Array[Entries] |
|             |                        | addEntry(@Entry) | @Error          |
|             |                        |                  | @Void           |
|             |                        | unlock()         | @Void           |
|             |                        | lock()           | @Void           |
|             |                        |                  |                 |
| Lock        | lockStatus@Boolean     | isLocked()       | @Boolean        |
|             |                        | unlock()         | @Void           |
|             |                        | lock()           | @Void           |
|             |                        |                  |                 |
| Entry       | content @Dict          | getContent()     | @Dict           |
|             |                        |                  |                 |

#### Tests
1. Test that `lock` changes a `Lock` `lockStatus` from `false` to `true`
2. Test that `lock` changes a `SecretDiary` `lock` from `false` to `true`