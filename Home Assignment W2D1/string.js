// Example:1
// 1. Split the string into an array of words.
// 2. Find the last word in the array.
// 3. Calculate the length of this word.
// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

let s = "Hello World";
let words = s.split(" ");
let lastword = words[words.length-1];
console.log(`First example: The length of the last word \"${lastword}"\ is ${lastword.length}`);

// Example:2
// 1. Trim the String
// 2. Split the String into Words
// 3. Identify the Last Word
// 4. Calculate the Length of the Last Word
// 5. Return the length
// Example 2:
// Input: s = " fly me to the moon "
// Output: 4
// Explanation: The last word is "moon" with length 4.

let s1 = " fly me to the moon ";
let words1 = s1.split(" ");
let lastword1 = words1[words.length-1];
console.log(`Second Example: the length of the last word \"${lastword1}"\ is ${lastword1.length}`);

// Example:3
// 1. Remove spaces and convert all letters to the same case
// 2. Sort the Characters
// 3. Compare Sorted Strings
// 4. Return the Result
// Example 3:
// Write a function to check if two strings are anagrams.
// Input: isAnagram('listen', 'silent')
// Output: true
// Input: isAnagram('hello', 'world')
// Output: false

let text1 = "listen";
let text2 = "silent";

if(text1.length == text2.length){
    let sort1 = (text1.split("")).sort();
    let sort2 = (text2.split("")).sort();
    console.log(sort1);
    console.log(sort2);
        if(sort1.join("") === sort2.join("")){
            console.log(`Example three: The given String is Anagram`);
        } else{
            console.log(`Example three: The given String is not Anagram`);
        }
}
else{
    console.log(`Example three: Lengths mismatch, therefore the strings are not an Anagram`);
}