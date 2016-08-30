'use strict'

let max_profit = (array) => {
  let basePrice = array.shift(),
      profit = array[0] - basePrice
  for (let num of array) {
    let newProfit = num - basePrice
    profit = Math.max.apply(null, [profit, newProfit])
    basePrice = Math.min.apply(null, [basePrice, num])
  }
  return profit
}

let stock_prices_yesterday = [10, 7, 5, 8, 11, 9],
    decreasing_stock_prices = [11, 10, 9, 8, 6, 5]

console.log("Max profit:", max_profit(stock_prices_yesterday))
console.log("Max profit when decreasing:", max_profit(decreasing_stock_prices))
