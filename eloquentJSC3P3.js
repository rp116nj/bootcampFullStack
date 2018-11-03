// Your code here.
function countBs(str) {
  
  return countChar(str, "B");
}
 function countChar(str,char) {
   let count = 0;
  for( let ele of str) {
    if ( ele === char)
      count++;
  }
  return count;
 }
console.log(countBs("BBC"));
// ? 2
console.log(countChar("kakkerlak", "k"));
// ? 4