//Change the characters at odd indices of a given string to uppercase.

let test = "changeme";
var testsplited = test.split("");

for( let i=0; i<=testsplited.length;i++){
    if(i % 2 !== 0){
        testsplited[i] = testsplited[i].toUpperCase();
    }
}

console.log(testsplited.join(""));


    