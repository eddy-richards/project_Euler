function largestPalindromeProduct() {
  var max = 0;
  for(var i = 999; i > 99; i--) {
    for(var k = 999; k > 99; k--) {
      var product = i * k;
      var stringValue = '' + product;
      
      if (stringValue === stringValue.split("").reverse().join("") && product > max) {
        max = product;
      }
    }
  }
  return max;
}
console.log(largestPalindromeProduct());