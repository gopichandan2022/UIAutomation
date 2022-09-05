// Anonymous function
() => {

    console.log("logic")
}

// 1) Function declaration
// add()  
function add() { // declaring the function 
    console.log(2 + 3)
}
add() // calling the function we can call above the function and below and everywear



// 2) Function Expression

//sub()  calling the function above the declarition through error " Cannot access 'sub' before initialization"
let sub = function () {
    console.log(4 - 3)
}
sub()


let multiply = function (num1, num2) {
    console.log(num1 * num2)
}
multiply(8, 2)

// 4) Arrow syntax denotes a function


let multipled = (num1, num2) => {
    console.log(num1 * num2);
}
multipled(8, 2)

 

