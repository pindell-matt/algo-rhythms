'use strict';

function initialTwoSum(nums, target) {
  let base = 0,
      index = 1;
  while (base < nums.length) {
    let a = nums[base],
        b = nums[index];
    if (a + b === target) return [base, index]
    if (index === nums.length - 1) {
      base += 1;
      index = base + 1;
    } else {
      index += 1;
    }
  }
};

function refinedTwoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
};

let nums = [2, 1, 9, 4, 4, 56, 90, 3],
    target = 8,
    answer = [3, 4],
    result = initialTwoSum(nums, target),
    correct = JSON.stringify(answer) === JSON.stringify(result);

console.log(`result of ${result} is correct: ${correct}`)
