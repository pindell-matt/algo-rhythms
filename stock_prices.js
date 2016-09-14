'use strict';

function getMaxProfit(array) {
  let base = array.shift();
  let currentProfit = array[0] - base;
  for (let price of array) {
      let newProfit = price - base;
      currentProfit = Math.max(...[currentProfit, newProfit]);
      base = Math.min(...[base, price]);
    }
  return currentProfit;
}

let stockPricesYesterday = [10, 7, 5, 8, 11, 9];
let answer = 6;
let result = getMaxProfit(stockPricesYesterday);
let correct = answer === result;

console.log('correct? ', correct);
console.log(result);
