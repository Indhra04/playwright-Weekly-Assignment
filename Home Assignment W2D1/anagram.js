/**
To determine whether two given strings have the same characters, regardless of their order, and identify if
they are anagrams of each other.
An anagram is a word or phrase formed by rearranging the letters of another word or phrase, typically using
all the original letters exactly once.
Example Input:
text1 = "stops";
text2 = "potss";
 */

let text1 = "stops";
let text2 = "potss";

    if(text1.length == text2.length){
        let t1sort = (text1.split("")).sort(); // [ 'o', 'p', 's', 's', 't' ]
        let t2sort = (text2.split("")).sort(); // [ 'o', 'p', 's', 's', 't' ]
        
            if(t1sort.join("") == t2sort.join("")){
                console.log(`The given String is Anagram`);
            }
            else{
                console.log(`The given String is not Anagram`);
            } 
    }
    else{
        console.log(`Lengths mismatch, therefore the strings are not an Anagram`);
    }

