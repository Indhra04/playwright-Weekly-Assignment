
//Finding the number type of the variable

let number = -100;

function numberType(){

    if(number > 0)
    {
        console.log(`The given number ${number} is Positive integer` )
    }
    else if(number < 0) {

       console.log(`The given number ${number} is Negative integer` )
    }
    else
    {
         console.log(`The given number ${number} is Zero` )
    }
    
}

numberType();

/**
 * Below code is having some error. When i provide +ve interger, it is provide answer as both positive and
 * negative. When i checked,
 * In JavaScript, else cannot have a condition.
 * Only if and else if can have conditions.
 * else automatically handles all remaining cases.
 */


// let number = 15;

// function numberType(){

//     if(number > 0)
//     {
//         console.log(`The given number ${number} is Positive integer` )
//     }
//     else if(number == 0) {
//         console.log(`The given number ${number} is Zero` )
//     }
//     else (number < 0)
//     {
//         console.log(`The given number ${number} is Negative integer` )
//     }
    
// }

// numberType();

