'use strict';

const _ = require('lodash');

let quickSort = (array) => {
  if (array.length < 2) return array;
  let pivot = array[0],
      lessThan = _.filter(array, (num) => { return num < pivot }),
      greaterThan = _.filter(array, (num) => { return num > pivot });
  return _.concat(quickSort(lessThan), pivot, quickSort(greaterThan));
}

let array = _.range(50);
let random = _.shuffle(array);
let sorted = quickSort(random);
let correct = _.isEqual(array, sorted);

console.log(`sorted === array: ${correct}`);
