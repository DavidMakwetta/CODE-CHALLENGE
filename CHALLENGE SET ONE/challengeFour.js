/*Write a function named firstPalindrome which takes a parameter: words. 
Given an array of string words, return the first palindromic string in the array. 
If there is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward.
* */


function firstPalindrome(words){
    for(let palindromic of words ){
        if(palindromic === palindromic.split('').reverse().join('')){
            return palindromic;
        }
    }
}

let words=["abc","car","ada","racecar","cool"];
const result = firstPalindrome(words);
console.log(result);

/* NOTE  */

/*The code palindromic.split('').reverse().join('') is a common JavaScript pattern used to reverse a string. 

palindromic.split(''): This splits the string palindromic into an array of individual characters. 
For example, "hello".split('') becomes ['h', 'e', 'l', 'l', 'o'].

.reverse(): This reverses the order of the elements in the array.
 For example, ['h', 'e', 'l', 'l', 'o'].reverse() becomes ['o', 'l', 'l', 'e', 'h'].

.join(''): This joins the elements of the array back into a single string, with no separators between the characters. 
For example, ['o', 'l', 'l', 'e', 'h'].join('') becomes "olleh".

Putting it all together, palindromic.split('').reverse().join('') takes the string palindromic, splits it into characters, reverses their order,
 and then joins them back into a string.
 If palindromic was "hello", the result would be "olleh". */