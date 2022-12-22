module.exports = function () {
  // write your code here
  let Arr= [];
  
  for (let i = 1; i <101; i++){
  if (i%3===0 && i%5===0){
    Arr.push('FizzBuzz');
    }
    
  else if (i%3===0){
    Arr.push('Fizz');
    }
    
  else if (i%5===0){
    Arr.push('Buzz');
    }
   
  else {
    Arr.push(i);
    }
  }
  
  return Arr; 
}
