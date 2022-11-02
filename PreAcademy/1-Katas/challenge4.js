/**
For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship.
Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
 */

//challenge 4 Total amount of points
function points(games) {
    
    // your code here
    let point = 0
    for(let i = 0; i < games.length; i++){

      //split to List
      const score = games[i].split(":")
      if(Number(score[0]) > Number(score[1])) {
        point += 3
      }else if(Number(score[0]) == Number(score[1])){
        point += 1
      }
    }
    return point
    
}