//question-3. Longest Substring Without Repeating Characters
//Given a string, find the length of the longest substring without repeating characters.
// Example 1:
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

var lengthOfLongestSubstring = function(s) {
    str=s.split('');
    ss = Array.from( new Set(str) );
    return ss.length

};
