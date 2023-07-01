//  Block scope and function scope 
// let and const are block scope and var is function scope
var val1="function scope";
function myApp() {
    {
        let val1 = "hywe";
        console.log(val1);
    }
    console.log(val1);
}
myApp();   // here it''ll print hywe first and then for next it'll show error because it can't access inside the block scope whereas in case of VAR  it'll show no error. 
// YOU CAN ACCESS VAR ANYWHERE IN FUNCTION but

// var val1="below funtn declaration"; 

// if you initialize its value after the function declaration then it'll show undefined



//          REST parameter

/*      Rest parameters allow us to collect all the remaining arguments into an array, */

function arr1(a,b,...c){
console.log(`value of a is ${a}`);
console.log(`value of b is ${b}`);
console.log(`value of c is ${c}`);
}
arr1(1,2,3,4,5,6); // if you want a and b value to be fixed and include all no in c then use rest parameter

//  lets take another example
function addAll(...x){
    let total=0;
    for (let i of x){
        total+=i;
        
    }
    return total;
}
console.log("total sum",addAll(44,66,88)); // output will be sum of all no