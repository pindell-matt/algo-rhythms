'use strict';

/*
  Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
  For example:
  Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
*/

let addDigits = (num) => {
  return (1 + (num - 1) % 9);
};

let num = 38,
    result = addDigits(num),
    expected = 2;

console.log(result === expected);
