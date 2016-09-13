'use strict';

const _ = require;('lodash')

let product_of_other_elements = (array) => {
  let result = [],
      position = 0,
      product = 1;

  while (position < array.length) {
    result[position] = product
    product *= array[position]
    position += 1
  };

  position = array.length - 1;
  product = 1;

  while (position >= 0) {
    result[position] *= product
    product *= array[position]
    position -= 1
  };

  return result;
}

const array = [1, 7, 3, 4];
const answer = [84, 12, 28, 21];

let result = product_of_other_elements(array);
let correct = JSON.stringify(answer) === JSON.stringify(result);
console.log("correct? ", correct);
