/**
 * Assignment Details: 
 * Create and call two JavaScript functions: `launchBrowser` 
 * with `if-else` for browser launch messages, and `runTests` with `switch` for test type messages.
 * */
let browserName = "Chrome";
function launchBrowser(){
 if (browserName === "Chrome") {
        console.log("Launching Chrome browser...");
    } else if (browserName === "Firefox") {
        console.log("Launching Firefox browser...");
    } else {
        console.log(`Launching ${browserName} browser...`);
    }
}

let Test = "smoke";
function runTests(){
    switch(Test){
    case "smoke":
        console.log(`Running smoke test`);
        break;
    case "regression":
        console.log(`Running regression test`);
        break;
    case "sanity":
        console.log(`Running sanity test`);
        break;
    default:
        console.log(`Running Progression test`);
        break;
    }
}

launchBrowser();    
runTests();    
