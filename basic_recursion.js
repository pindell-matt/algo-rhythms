'use strict';

function sum(array) {
  if (array.length === 1) return array[0];
  return array[0] + sum(array.slice(1, array.length));
}

function length(array) {
  if (array[1] === undefined) return 1;
  array.shift();
  return 1 + length(array);
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let arr = [1, 2, 3, 4, 5];
console.log(`Given array: ${arr}`);
console.log(`sum: ${sum(arr)}`);
console.log(`length: ${length(arr)}`);
console.log(`Given 10, fibonacci returns: ${fibonacci(10)}`);
