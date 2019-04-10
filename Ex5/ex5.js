smallestMultiple = () => {
  var flag = true;

  var startValue = 2520;
  // 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder
  // already mention in the question

  while(flag){
    for(var i = 2; i <= 20; i++){
      if(startValue % i == 0){
        if(i == 20){
          console.log("startValue", startValue)
          flag = false;
        }
      }else{
        break;
      }
    }
    startValue += 1;
  }
}

smallestMultiple()