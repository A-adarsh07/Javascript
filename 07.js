//  MAP ,FILTER AND REDUCE
let myArr= [1,2,3,4,5];
let newArr= myArr.map(function(x){
    return x*x;
})
console.log(newArr);
 
let newArr2= myArr.filter(function(x){
    return x%2===0;
})
console.log(newArr2);

let newArr3= myArr.reduce(function(accumulator,x){
    return accumulator+x;
},2)    //here 2 is accumulator value , you can put any value here 

console.log(newArr3);