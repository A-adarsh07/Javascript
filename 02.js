// hoisting in JS
getname();
// function will show result even if you initialize it before
// but it'll show error for variables or undefined
// console.log(x);
console.log(getname);
// whereas if you put function name then it"ll show the whole function syntax
let x=4;
 function getname(){
    console.log("namastey javascript");
 }
 console.log(x);