const arr = [1, 2, 3, 4, null];

let nul = 0
let numberOdd = 0
let numberEven = 0

arr.forEach(function(item,index,array) {
  
  if(typeof item === 'number' && !isNaN(item)) {
    
    nul++
  }
      
  else if (item % 2 == 0) {
    
    numberEven++
    
  } else {
    
    numberOdd++
  }
    
});

console.log(nul);
console.log(numberEven)
console.log(numberOdd)

