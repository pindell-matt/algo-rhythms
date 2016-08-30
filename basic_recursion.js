'use strict'

let sum = (array) => {
  if (array.length === 1) { return array[0] }
  return array[0] + sum(array.slice(1, array.length))
}

let length = (array) => {
  if (array[1] === undefined) { return 1 }
  array.shift()
  return 1 + length(array)
}

let fibonacci = (n) => {
  if (n <= 1) { return n }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

let arr = [1, 2, 3, 4, 5]
console.log("The sum is:", sum(arr))
console.log("The length is:", length(arr))
console.log("Given 10, fibonacci returns:", fibonacci(10))
