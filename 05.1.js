console.log("welcome to another tutorial");
//  let i=0;
//  for(i=0;i<3;i++){
//     console.log("go to gym right now");
//  }

let friends=["aashish","ankit", "siddhant","anuj","adarsh"];
// for (let index = 0; index < friends.length; index++) {
//     console.log("hello"+" "+friends[index]); 
// }
// another syntax modern js
// *****FOR EACH LOOP****

friends.forEach(function f(element){
    console.log("hello " + element);
})

// FOR OF LOOP
for(element of friends){
    console.log("heyyy brother "+ element);
}

// LOOP TO ITERATE OVER OBJECTS IN JS
let employee={
    name:"jonas",
    salary:"20k",
    job:"ame",
}
for(key in employee){
    console.log(`The ${key} of employee is ${employee[key]}`);
}
// ******* WE USE (``) BACKTICKS TO GET VALUE OF KEY OR ANY OTHER VALUE
// WHILE LOOP
let j=4;
while(j<8){
    console.log(`${j} is more than 4`);
    j++;
}