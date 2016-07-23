'use strict'

class BinarySearch {
  constructor(array) {
    this.array = array
  }

  binarySearch(item) {
    let low = 0
    let high = this.array.length - 1

    while (low <= high) {
      let mid = Math.floor((low + high) / 2)
      let guess = this.array[mid]

      if (guess === item) { return mid }
      if (guess > item) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    return null
  }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const bs = new BinarySearch(array)

console.log(bs.binarySearch(1));
console.log(bs.binarySearch(10));
console.log(bs.binarySearch(-1));
