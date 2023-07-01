console.log("this is tutorial 5");
function greettext(name,msg="hello"){
    console.log(name +" "+ msg);
}
let name1="harry";
let name2="amanam";
let name3="jian";
let greet="good morning boy";
console.log(name1);
greettext(name1,greet);
greettext(name2,greet);
greettext(name3);// here only name will be send and hello msg will be added default

let returnvalue=sum(1,2,3);
console.log("value of sum is" ,returnvalue);

function sum(a,b,c){
    let d=a+b+c;
    return d;

}

// function alert ,prompt,confirm

// alert function does not return anything
alert("you're welcome");
// prompt function ask question
let popup=prompt("what is your name ?","guest");
console.log(popup);

// confirm in js
let deletepost=confirm("Do you really want to delete this post?");
console.log(deletepost);

if(deletepost){
    console.log("this post is deleted successfully");
}
else{
    console.log("carry on");
}