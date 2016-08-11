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

let arr = [1, 2, 3, 4, 5]
console.log(sum(arr));
console.log(length(arr));
