const arr = [1, 2, 3, 4]

for (let i = 0; i < arr.length; i++) {
  
  if (arr[i] !== arr[0]){
    console.log(false);
    break;
    
  } else {
    let x = arr[i] == arr[0];
    console.log(x);
  }
}