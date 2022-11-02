let scoreDict = {
    "A": 1, 
    "E": 1, 
    "I": 1, 
    "O": 1, 
    "U": 1, 
    "L": 1, 
    "N": 1,
    "R": 1,
    "S": 1,
    "T": 1,
    "D": 2,
    "G": 2,
    "B": 3,
    "C": 3,
    "M": 3,
    "P": 3,
    "F": 4,
    "H": 4,
    "V": 4,
    "W": 4,
    "Y": 4,
    "K": 5,
    "J": 8,
    "X": 8,
    "Q": 10,
    "Z": 10,
}

// Use dictionary and ternary operator
class Scrabble{
    constructor(str){
        str == null ? this.str = "" : this.str = str.toUpperCase();
    }
    score(){
        let score = 0;
        for(let i = 0; i < this.str.length; i++){
            this.str[i] in scoreDict ? score += scoreDict[this.str[i]] : score += 0;
        }
        console.log(score);
    }
}


// All test cases past
let scrabble1 = new Scrabble('')
scrabble1.score() // => 0

let scrabble2 = new Scrabble(" \t\n")
scrabble2.score() // => 0

let scrabble3 = new Scrabble(null)
scrabble3.score() // => 0

let scrabble4 = new Scrabble('a')
scrabble4.score() // => 1

let scrabble5 = new Scrabble('f')
scrabble5.score() // => 4

let scrabble6 = new Scrabble('street')
scrabble6.score() // => 6

let scrabble7 = new Scrabble('quirky')
scrabble7.score() // => 22

let scrabble8 = new Scrabble('OXYPHENBUTAZONE')
scrabble8.score() // => 41