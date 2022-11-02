const oddNumbersInArray = (inputArray) =>{
    let oddNumbers = 0;
    for (let i = 0; i < inputArray.length; i++){
        if (inputArray[i] % 2 != 0){
            oddNumbers += 1;
        }
    }
    return oddNumbers;
};

module.exports = {
    oddNumbersInArray,
}