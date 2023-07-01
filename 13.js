//  LEXICAL SCOPE

function Lexical(){
    const val1="hello";
    function myfunc(){
        // const val1="goodbye";  here val1 is in lexical scope so it'll print out goodbye but as soon as you comment out this data the console.log will print the outer scope value which is hello. it'll search val1 in lexical environment.
        console.log("hii",val1); 
    };
   console.log(val1);
   myfunc();

}
Lexical();


const var2="welcome to global scope";

function scope(){
    const val2="inside scope";
    function func2(){
        let val3= "local variable inside the function" ;
        console.log(val3,"\n",var2);
    }
   
    console.log(var2); //this will take value from global scope
    func2();

}
scope();