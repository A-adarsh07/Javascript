console.log("DOM manipulation  ");
let main=document.getElementById("container");
console.log(main);

let list = document.getElementById('lists');
console.log(list);

// to modify selectors 

// let sel = document.querySelector('#nav>li');
// console.log("Selector returns ", sel)

let sel = document.querySelectorAll('#nav>li');
console.log("Selector returns ", sel)

