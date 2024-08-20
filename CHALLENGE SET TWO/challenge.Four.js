/*  Given a non-empty array of integers nums, every element appears twice except for one. 
Find that single one.
  */

function findSingle(nums) {
    let result = 0;

    for (const num of nums) {
        result ^= num;
    }

    return result;
}
const nums = [2, 2, 1];
console.log(findSingle(nums)); 
