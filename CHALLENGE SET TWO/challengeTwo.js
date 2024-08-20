/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

function containsDuplicate(nums) {
    const seen = {};
    for (const num of nums) {
        if (seen[num]) {
            return true;
        }
        seen[num] = true;
    }
    return false;
}
console.log(containsDuplicate([1, 2, 3, 4, 5, 1])); 
console.log(containsDuplicate([1, 2, 3, 4, 5]));   
