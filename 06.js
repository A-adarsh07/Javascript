// CLosure 
function x(){
for(var i=1;i<=5;i++){      // for(let i=1,i<=5;i++)
    setTimeout(function(){
console.log(i);
},i*2000);
}
console.log("hello");
}
x();
// output - hello and five  times 6 will be printed bcz we are using VAR here and function will pointed to the same memory address unlike LET where after each iteration, a new copy of i will be formed.and it'll print hello and 1,2,3,4,5 respectively and here LET is blockscope and it creates its new copy everytime
        