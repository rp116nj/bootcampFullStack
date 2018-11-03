function range(start, end,step ){
  let arr =[];
  
  if(step === undefined){
    step =1;
  }
   if ( step > 0){
    for ( let i = start; i <= end; i= i+step) {
       arr.push(i);
      }
    }
    else {
      for ( let i = start; i >= end; i= i+step) {
       arr.push(i);
      }
    }
  return arr;
}
 function sum(array) {
   let val = 0;
   for( let ele of array){
     val += ele;
   }
   return val;
 }
console.log(range(1, 10));
// ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// ? [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// ? 55