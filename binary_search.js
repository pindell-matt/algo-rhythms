'use strict'

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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
console.log(binarySearch(array, 10));
console.log(binarySearch(array, -1));
