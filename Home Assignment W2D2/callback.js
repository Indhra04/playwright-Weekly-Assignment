//callbacks to handle asynchronous tasks in JavaScript

// Step 1: Declare a global variable
let browser = "Chrome";

// Step 2: Create a function that takes a callback
function checkBrowserVersion(callback) {
    console.log("Checking browser version...");

    // Simulate delay (like fetching data from a server)
    setTimeout(() => {
        // Step 3: Invoke callback and pass browser value
        callback(browser);
    }, 2000); // 2-second delay
}

// Step 4: Define the callback function
function displayBrowserVersion(version) {
    console.log(`Browser version using callback: ${version}`);
}

// Step 5: Call the main function and pass the callback
checkBrowserVersion(displayBrowserVersion);
