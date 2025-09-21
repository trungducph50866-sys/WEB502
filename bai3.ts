function countChar(str: string, char: string): number {
  let count = 0;
  for (const c of str) {
    if (c === char) count++;
  }
  return count;
}


console.log(countChar("hello world", "o"));
console.log(countChar("typescript", "t"));  
