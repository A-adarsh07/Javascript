//  Param destructuring  // mostly use in object and also in react

// create Object
const person= {
    name:'Jonas',
    age:20,
    gender:'male',
    address:{
        city:'New York',
        state:'NY'
    }
}
// function details(obj){
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.gender);
//     console.log(obj.address);
// }
// details(person);

// there is another way of destructuring

function details({name,age,gender,address}){
    console.log(name);
    console.log(age);
    console.log(gender);
    console.log(address);
}
// details({...person}); or
details(person);
