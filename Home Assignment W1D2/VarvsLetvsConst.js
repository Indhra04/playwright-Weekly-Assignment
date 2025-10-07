
const browserName = "Chrome";

function getBrowserName(){

    if(browserName === "Chrome"){
        var browserName = "Firefox"
        console.log(`Inside if block is ${browserName}`);

    }
    console.log(`Outside if block is ${browserName}`);
}
getBrowserName();


// // 1 & 2. Declare a global variable
// const browserName = "Chrome";

// function getBrowserName() {
//     if (browserName === "Chrome") {
//         // 5. Declare local variable with the same name using var
//         var browserName = "Firefox";  
//         console.log("Inside if block:", browserName); // Firefox
//     }
//     console.log("Outside if block:", browserName); // Firefox (var is function-scoped, not block-scoped)
// }

// getBrowserName();
