function romanToInt(roman) {
  // Map Roman numerals to their integer values
  const romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };
  
  let total = 0;
  
  for (let i = 0; i < roman.length; i++) {
      let current = romanNumerals[roman[i]];
      let next = romanNumerals[roman[i + 1]];
      if (next > current) {
          total -= current;
      } else {
          total += current;
      }
  }
  
  return total;
}

console.log(romanToInt("MM"));      
console.log(romanToInt("MDCLXVI"));  
console.log(romanToInt("M"));        
console.log(romanToInt("CD"));       
console.log(romanToInt("XC"));      
console.log(romanToInt("XL"));      
console.log(romanToInt("I"));   
