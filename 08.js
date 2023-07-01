// var let and const
//for loop is block scoped
for (var i = 0; i < 10; i++) {
    var iAmInside = "I am available outside of the loop";
  }
  
  console.log(iAmInside);
  // I am available outside of the loop
  
  //block scope
  if(true){
    var inside = "Inside";
  }
  console.log(inside);
  // Inside
  
  //Function scoped
  function myFunc(){
    var functionScoped = "I am available inside this function";
    console.log(functionScoped);
  }
  myFunc();
  // I am available inside this function
  console.log(functionScoped);
  // ReferenceError: functionScoped is not defined
  
//   In the first and second example, the value of the var leaked out of the block-scope and could be accessed from outside of it, whereas in the third example var was confined inside a function-scope and we could not access it from outside.

// This happens because of Hoisting.