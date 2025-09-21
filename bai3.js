function countChar(str, char) {
  var count = 0;
  for (var c of str) {
    if (c === char) count++;
  }
  return count;
}


console.log(countChar("hello world", "o")); 
console.log(countChar("typescript", "t"));  
