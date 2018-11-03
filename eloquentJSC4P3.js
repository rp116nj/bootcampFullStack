// Your code here.
function arrayToList(array) {
 let list = {};
  for (let i = 0; i<array.length; i++) {
    list.value = array[0];
    array = array.splice(1);
    if (array.length === 0) {
      list.rest = null;
    }
    else {
    list.rest = arrayToList(array);
    }
  }
  return list;
}
let arr =[];
function listToArray(list) {
 // console.log(list);
  
  for( let key in list) {
   if(key ==='value'){
     arr.push(list[key]);
   }
   else {
     listToArray(list[key]);
   }
  }
 return arr; 
}