//IMMEDIATELY INVOKED FUNCTIONS :- used to save some storage and for quick function
(function(){
    console.log("hello world!");
    // alert("namastey");
})();

                    // function inside function 

function app(){
    const fun1= ()=>{
        console.log("how ya doing");
    }
    const fun2 =(num1,num2)=>{
        return num1+num2;
    }
    const fun3=(x1,x2) => x1*x2;

    fun1();
    let result =fun2(50,6);
    console.log(`result of addition ${result}`);
    console.log(fun3(9,7));
    
    console.log("this is outer function");

    }

app();
