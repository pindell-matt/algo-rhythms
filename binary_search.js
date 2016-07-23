'use strict'
const _ = require('lodash')

const array = _.range(150)

let binarySearch = (array, item) => {
  let low = 0
  let high = array.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    let guess = array[mid]

    if (guess === item) { return mid }
    if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return null
}

console.log(binarySearch(array, 3));
console.log(binarySearch(array, 100));
console.log(binarySearch(array, -1));
