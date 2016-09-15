'use strict';

/*
  Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
  For example:
  Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
*/

function addDigits(num) {
  return (1 + (num - 1) % 9);
};

const num = 38;
const answer = 2;
let result = addDigits(num);

console.log(`${result} === ${answer} ?`, result === answer);
