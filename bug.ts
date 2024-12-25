function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", 5); // Type Error! 
console.log(result); // This line will not be reached because of the previous error