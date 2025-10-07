//Learn how Promises can simulate tasks like fetching data, where you can use a simple condition (e.g.,
//const data = true) instead of actually fetching data from a server Expected Completion Time:

/// Step 1: Create a function that returns a Promise
function fetchDataFromDatabase() {
    console.log("Fetching data from database...");

    return new Promise((resolve, reject) => {
        // Step 2: Simulate delay of 3 seconds
        setTimeout(() => {
            const data = true; // Change to false to test rejection

            // Step 3: Resolve or reject based on data
            if (data) {
                resolve("Data fetched successfully!");
            } else {
                reject("Data not found!");
            }
        }, 3000); // 3-second delay
    });
}

// Step 4: Call the function and handle the Promise
fetchDataFromDatabase()
    .then((message) => {
        console.log(message); // "Data fetched successfully!" if resolved
    })
    .catch((error) => {
        console.log(error); // "Data not found!" if rejected
    });
