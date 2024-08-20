/* Given an Array containing integers, floats, and one character strings, write a function that takes an Array as a parameter
 and returns an Object with keys evens, odds, and chars. The value for evens is an array of sorted even numbers, 
 the value for odds is a list of sorted odd numbers and
  chars is a list of sorted single-character strings.
 */


  function categorizeArray(arr) {
    const result = {
        evens: [],
        odds: [],
        chars: []
    };
    for (const item of arr) {
        if (typeof item === 'number') {
            if (Number.isInteger(item)) {
                if (item % 2 === 0) {
                    result.evens.push(item);
                } else {
                    result.odds.push(item);
                }
            }
        } else if (typeof item === 'string' && item.length === 1) {
            result.chars.push(item);
        }
    }
    result.evens.sort((a, b) => a - b);
    result.odds.sort((a, b) => a - b);
    result.chars.sort();

    return result;
}
const arr = [4, 3, 'a', 2, 'b', 7, 1.5, 'c', 8, 5];
const categorized = categorizeArray(arr);
console.log(categorized);