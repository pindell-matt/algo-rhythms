'use strict';

class Change {
  constructor() {
    this.memo = new Map();
  }

  calcPossibilities(amount, denominations, index) {
    index = index || 0;

    let memoKey = { amountLeft: amount, currentIndex: index }
    if (this.memo.has(memoKey)) return this.memo.get(memoKey);

    if (amount === 0) return 1;
    if (amount < 0) return 0;
    if (index === denominations.length) return 0;

    let currentCoin = denominations[index];

    let possibilities = 0;
    while (amount >= 0) {
      possibilities += this.calcPossibilities(amount, denominations, index + 1);
      amount -= currentCoin;
    }

    this.memo.set(memoKey, possibilities);
    return possibilities;
  }
}

let change = new Change();
let result = change.calcPossibilities(4, [1, 2, 3]);
console.log('correct? ', result === 4);

console.log(change.memo);
