//question-3. Longest Substring Without Repeating Characters
//Given a string, find the length of the longest substring without repeating characters.
// Example 1:
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
var s =  "abcabcbb";
str=s.split('');
var ss = Array.from( new Set(str) );


console.log(ss.join(''))
console.log(ss.length)

