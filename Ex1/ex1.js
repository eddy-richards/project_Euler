function sumOfNumbers(value){
  value = value - 1
  if(value == 0){
      return value;
  }else if(value % 5 == 0 || value % 3 == 0){
      return value + sumOfNumbers(value)
  }else{
      return sumOfNumbers(value)
  } 
}

console.log(sumOfNumbers(1000))