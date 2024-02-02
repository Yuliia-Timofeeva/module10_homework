x = prompt("Введите число");

x++;

if ((typeof x) === 'number' && x % 2 === 0) {
    
    console.log("Это четное число")
  
    } else if ((typeof x) === 'number' && x % 2 !== 0) {
      
      console.log("Это нечетное число")
   
    }
  
if (typeof x !== 'number') {
   
  console.log ("Упс, кажется вы ошиблись")
}