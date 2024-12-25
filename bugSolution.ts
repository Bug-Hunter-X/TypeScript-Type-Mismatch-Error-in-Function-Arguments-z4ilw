function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b; // String concatenation
  } else {
    return NaN; // Or throw an error
  }
}

let result1 = add(5, 3); // Correct usage
console.log(result1); // Output: 8

let result2 = addSafe("hello", 5); // Safe usage with type checking and handling
console.log(result2); // Output: NaN (or handles string concatenation if needed)

let result3 = addSafe("hello", "world"); // Safe usage with string concatenation
console.log(result3); // Output: "helloworld"