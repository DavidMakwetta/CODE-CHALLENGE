/* Write a function named twoSum which takes two parameters: nums and target. 
Given an array of integer nums and an integer target, return indices of the two numbers such that they add up to the target.
 You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

function twoSum(nums,target){
    for(let i of nums){
        for(let j of nums){
            if(i+j===target){
                return [nums.indexOf(i), nums.indexOf(j)];
            }
        }
    }
}


let someNums=[2,7,9,8];
const result = twoSum(someNums,9)
console.log(result);