'use strict';

const arrayOfInts = [1, 10, -5, 1, -100];
const answer = 5000;

function highestProductOf3(array) {
  if (array.length < 3) throw new Error('Need more than 3 integers!');

  let [lowest, highest] = array.slice(0, 2).sort();

  let highestProductOf2 = [lowest, highest].reduce((a, x) => a *= x);
  let lowestProductOf2 = [lowest, highest].reduce((a, x) => a *= x);

  let highestProductOf3 = array.slice(0, 3).reduce((a, x) => a *= x);

  for (var i = 2; i < array.length; i++) {
    var current = array[i];

    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2
    );

    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest
    );

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest
    );

    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);
  }
  return highestProductOf3;
}

let result = highestProductOf3(arrayOfInts);
let correct = JSON.stringify(answer) === JSON.stringify(result)
console.log("correct? ", correct)
