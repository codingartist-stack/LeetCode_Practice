//Leet code practice and debugging

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function (nums) {
//   let array = new Set(nums);
//   let sorted = [];

//   array.forEach((element) => {
//     sorted.push(element);
//   });

//   return sorted;
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var removeDuplicates = function (nums) {
  let getAxed = 0;
  let pointerOne = 0;
  let pointerTwo = pointerOne + 1;

  while (pointerOne < nums.length) {
    if (nums[pointerOne] !== nums[pointerTwo]) {
      nums.splice(pointerOne + 1, getAxed);
      pointerOne++;
      pointerTwo = pointerOne + 1;
      getAxed = 0;
    } else {
      pointerTwo++;
      getAxed++;
    }
  }
  return nums;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
