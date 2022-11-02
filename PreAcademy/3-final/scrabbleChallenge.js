let level1 = ["A", "E", "I", "O", "U", "L", "N","R", "S", "T"]
let level2 = ["D", "G"]
let level3 = ["B", "C", "M", "P"]
let level4 = ["F", "H", "V", "W", "Y"]
let level5 = ["K"]
let level6 = ["J", "X"]
let level7 = ["Q", "Z"]

class Scrabble{
    constructor(str){
        if(str == null){
            this.str = ""
        }else{
            this.str = str.toUpperCase()
        }      
    }
    score(){
        let score = 0
        
        for(let i = 0; i < this.str.length; i++){
            if(level1.includes(this.str[i])){
                score += 1
            }else if(level2.includes(this.str[i])){
                score += 2
            }else if(level3.includes(this.str[i])){
                score += 3
            }else if(level4.includes(this.str[i])){
                score += 4
            }else if(level5.includes(this.str[i])){
                score += 5
            }else if(level6.includes(this.str[i])){
                score += 8
            }else if(level7.includes(this.str[i])){
                score += 10
            }
        }

        console.log(score)
        return score
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