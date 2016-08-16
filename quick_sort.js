'use strict'
const _ = require('lodash')

let quickSort = (array) => {
  if (array.length < 2) {
    return array
  } else {
    let pivot = array[0],
        lessThan = _.filter(array, (num) => { return num < pivot }),
        greaterThan = _.filter(array, (num) => { return num > pivot })

    return _.concat(quickSort(lessThan), pivot, quickSort(greaterThan))
  }
}

let arr = [1, 2, 3, 4, 5]
let random = _.shuffle(arr)
let sorted = quickSort(random)
console.log(_.isEqual(arr, sorted))
