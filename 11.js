// Template Literals are strings literals which allow embedded expressions. Before ES6 introduced them, they were called as Template Strings.
// Against the standard ' and " quotes template literals uses back-ticks ` `.
let a = `line will break after this 
 line broke before backslah 
broke again`;

console.log(a);


// before ES6
var b = 4;
var c = "Two plus Two is " + b;
console.log(c); // Twp plus Two is 4

// after ES6
let b = 4;
let a1 = `Two plus Two is ${b}`;
console.log(a1); // Twp plus Two is 4

// NESTING
let firstName = 'prashant';
let lastName = 'yadav';
console.log(`Hello! ${`My name is ${firstName} ${lastName}`}`);
//Hello! My name is prashant yadav


// adding logic in template literal
let a2 = 5;
console.log(`a is greater than 5?. ${a2 > 5 ? true : false}`);
//a is greater than 5?. false