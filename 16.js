// map/filter/reduce
// forEach
console.log("forEach");
const number = [1, 2, 3, 4, 5];

function myfunc(item) {
    console.log(item * 2);
}

number.forEach(myfunc); // function is executed by forEach for every array item//
// or we can also do it this way
number.forEach(function (index) {
    console.log(index * 2);
});

// MAP  //
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.
console.log("MAP");
const table = [2, 3, 4, 5, 6, 7, 8, 9];

const square = function (number) {
    return Math.pow(number, 2); // you have to return the result to get the new array
}
const table2 = table.map(square);
console.log(table2);
// another way to do this 
const table3 = table.map((x) => x * x);
console.log(table3);

// another example
const users = [
    { name: 'John', age: 20 },
    { name: "Mary", age: 25 },
    { name: "Tom", age: 30 },
    { name: "jonas", age: 22 }
]
const username = users.map((index) => {
    return index.name;
});
console.log(username);
// simple way 

let names = users.map(({ name }) => name);    //{name:'John'},
console.log(names);

// // FILTER METHOD
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
console.log("FILTER");
const array=[11,233,455,5,564,3,32,1,12];

let array1= array.filter((x) => {
    return x%2===0;
});
// returns even numbers from given arry
console.log(array1);

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const longWords = words.filter(word => word.length > 6);
console.log(longWords);
// longWords is ["exuberant", "destruction", "present"]