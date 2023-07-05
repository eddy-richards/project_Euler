sumOfEvenFibonacciNumbers = (range) => {
  var firstNum = 1;
  var secondNum = 2;
  var nextNum = 0;
  var sumOfEvenFibNum = 0

  for(var i = 0; nextNum < range; i++){
    nextNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = nextNum;

    if(firstNum % 2 == 0){
      sumOfEvenFibNum = sumOfEvenFibNum + firstNum
    }
  }
  console.log(sumOfEvenFibNum)
}

console.log('test')
sumOfEvenFibonacciNumbers(400000)