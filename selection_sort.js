'use strict'
const _ = require('lodash')

let findSmallest = (array) => {
  let smallest = array[0],
      smallestIndex = 0
  for (let i = 0; i <  array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i]
      smallestIndex = i
    }
  }
  return smallestIndex
}

let selectionSort = (array) => {
  let newArray = [],
      originalLength = array.length
  for (let i = 0; i < originalLength; i++) {
    let smallestIndex = findSmallest(array)
    newArray.push(array.splice(smallestIndex, 1).pop())
  }
  return newArray
}

let array = _.range(50)
let random = _.shuffle(array)
let sorted = selectionSort(random)
console.log(_.isEqual(array, sorted))
