'use strict';

class Change {
  constructor() {
    this.memo = new Map();
  }

  calcPossibilities(amt, denom, index) {
    index = index || 0;

    let memoKey = { amountLeft: amt, currentIndex: index }
    if (this.memo.has(memoKey)) return this.memo.get(memoKey);

    if (amt === 0) return 1;
    if (amt < 0) return 0;
    if (index === denom.length) return 0;

    let currentCoin = denom[index];

    let possibilities = 0;
    while (amt >= 0) {
      possibilities += this.calcPossibilities(amt, denom, index + 1);
      amt -= currentCoin;
    }

    this.memo.set(memoKey, possibilities);
    return possibilities;
  }
}

let change = new Change();
let result = change.calcPossibilities(4, [1, 2, 3]);
console.log('correct? ', result === 4);
