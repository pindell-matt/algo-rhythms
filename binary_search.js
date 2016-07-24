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

let recursiveBinarySearch = (array, item) => {
  let mid = Math.ceil((array.length - 1) / 2)

  while (array.length > 2) {
    if (array[mid] === item) { return array[mid] }

    let upperRange = array.slice(mid, array.length)
    if (array[mid] < item) { return recursiveBinarySearch(upperRange, item) }

    let lowerRange = array.slice(0, mid)
    if (array[mid] > item) { return recursiveBinarySearch(lowerRange, item) }
  }

  if (array[mid] === item) { return array[mid] } else { return null }
}

console.log(binarySearch(array, 3));
console.log(binarySearch(array, 100));
console.log(binarySearch(array, -1));

console.log(recursiveBinarySearch(array, 3));
console.log(recursiveBinarySearch(array, 100));
console.log(recursiveBinarySearch(array, -1));
