'use strict';

let initialTwoSum = (nums, target) => {
  let base = 0,
      index = 1;
  while (base < nums.length) {
    var a = nums[base];
    var b = nums[index];
    if (a + b === target) return [base, index]
    if (index === nums.length - 1) {
      base++
      index = base + 1
    } else {
      index++
    }
  }
};

let refinedTwoSum = (nums, target) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i]
    map.set(nums[i], i)
  }
};

let nums = [2, 1, 9, 4, 4, 56, 90, 3],
    target = 8,
    expected = [3, 4];

console.log('expected: ', expected,
            'initial: ', initialTwoSum(nums, target),
            'refined: ', refinedTwoSum(nums, target));
