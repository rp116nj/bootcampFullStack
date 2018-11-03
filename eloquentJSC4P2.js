// Your code here.
function reverseArray(array) {
  let newArray =[];
  for ( let i = array.length-1; i >=0; i--)
  {
    newArray.push(array[i]);
  }
return newArray;
}
function reverseArrayInPlace(array) {
  let len = array.length;
  let midPoint = Math.ceil(len/2);
  for ( let i = 0; i < midPoint;i++){
    let temp = array[i];
    array[i]= array[len-1-i];
    array[len-1-i] = temp;
    }
  return array;
}
console.log(reverseArray(["A", "B", "C"]));
// ? ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// ? [5, 4, 3, 2, 1]