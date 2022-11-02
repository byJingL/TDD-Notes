// challenge 1 Square(n) Sum [1, 2, 2] - -> 1^2 + 2^2 + 2^2 = 9

function squareSum(numbers){

    let sum = 0
    for(let i = 0; i < numbers.length; i++){
      sum += numbers[i] ** 2
    }
  return sum

}