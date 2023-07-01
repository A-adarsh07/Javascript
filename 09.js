function foodprocessor(apples,oranges){
   console.log(apples,oranges);
   let juice=`juice with ${apples} apples and ${oranges} oranges`;
   return juice;
}

let mixjuice=foodprocessor(2,3);// to get return value
console.log(mixjuice);
// OR we can simply write it as

console.log(foodprocessor(2,3));

// Temporal Dead Zone with lexical or block scoping

// function test(){
//     var foo = 33;
//     if (true) {
//        let foo = (foo + 55); // ReferenceError: foo is not defined
//     }
//  }
//  test();
//  Due to lexical or block scoping let foo = (foo + 55) access the foo of the current block that is inside the if condition. It does not access the var foo = 33; as let is blocked scope. let foo is declared but it is not initialized that is why it is still in temporal dead zone.