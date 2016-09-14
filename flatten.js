'use strict';

function flatten(array, result = []) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].constructor.name === "Number") result.push(array[i]);
    if (array[i].constructor.name === "Array") return flatten(array[i], result);
  }
  return result;
}

let nestedArray = [1, 2, 3, [4, 5, [6, 7]]];
let answer = [1, 2, 3, 4, 5, 6, 7];
let result = flatten(nestedArray);
let correct = JSON.stringify(answer) === JSON.stringify(result);

console.log(result);
console.log('correct? ', correct);
