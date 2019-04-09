function largestPrimeFactor(value) {
  var factors = [], i;
  
  for (i = 2; i <= value; i++) {
    while ((value % i) === 0) {
      if (!factors.includes(i)) 
        factors.push(i);
      value /= i;
    }
  }
  
  return factors[factors.length - 1];
}

console.log(largestPrimeFactor(600851475143))