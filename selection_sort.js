'use strict'
const _ = require('lodash')

const array = _.shuffle(_.range(150))

let findSmallest = (array) => {
  let smallest = array[0]
  let smallestIndex = 0

  for (let i = 0; i <  array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i]
      smallestIndex = i
    }
  }

  return smallestIndex
}

let selectionSort = (array) => {
  let newArray = []
  let originalLength = array.length

  for (let i = 0; i < originalLength; i++) {
    let smallestIndex = findSmallest(array)
    newArray.push(array.splice(smallestIndex, 1).pop())
  }

  return newArray
}

console.log(selectionSort(array));
