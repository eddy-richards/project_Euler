sumSquareDifference = (n) => {
  var sumOfSquare = (n*(n + 1)*((2*n) + 1))/6
  var squareOfSum = (n*(n+1))/2
  squareOfSum *= squareOfSum

  console.log(squareOfSum - sumOfSquare)
}

sumSquareDifference(100)