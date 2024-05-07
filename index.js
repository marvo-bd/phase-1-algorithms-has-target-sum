function hasTargetSum(array, target) {
  const numSet = new Set();

  for (const num of array) {
    const complement = target - num;
    if (numSet.has(complement)) {
      return true;
    }
    numSet.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time complexity: O(n)
*/

/* 
  Add your pseudocode here
  - Create a set to store the numbers from the array.
  - Iterate through the array.
  - For each number, calculate its complement (target - num).
  - If the complement is already in the set, return true (found two numbers summing up to the target).
  - Otherwise, add the number to the set.
  - If the loop finishes without finding a pair, return false.
*/

/*
  Add written explanation of your solution here
  This solution uses a set to store the numbers as we iterate through the array. For each number, we calculate its complement (the difference between the target and the current number). If this complement is already in the set, it means we've found two numbers that sum up to the target, so we return true. If we finish iterating through the array without finding such a pair, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
