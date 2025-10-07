//Reverse the odd position words from a String with the input
// Example Input:
// test = "I am a software tester"
// Expected Output:
// "I ma a erawtfos tester"

let test = "I am a software tester";

// Step 1: Split the sentence into words
let words = test.split(" ");

// Step 2: Traverse through the array
for (let i = 0; i < words.length; i++) {
    // Step 3: Check if index is odd
    if (i % 2 !== 0) {
        // Step 4: Reverse the word at odd indices
        words[i] = words[i].split("").reverse().join("");
    }
}

// Step 5: Join the words back into a sentence
let result = words.join(" ");

// Step 6: Print the final output
console.log(result);