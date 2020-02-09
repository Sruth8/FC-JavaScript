// Write Reuseable Code with Functions
function myReusableFunction() {
    console.log("Yoooo, Winning");
}

myReusableFunction(); //calling the function here

//Passing Values to Functions with Arguments
function myFunctionWtihArgs(a, b) {
    console.log(a - b); //output 5
    console.log(a + b); //output 15
}
   myFunctionWtihArgs(10, 5);// Output 5

//Global Scope and Functions. 
                              // Scope refers to the visiablity of varables out side of the function block
                              // Global means your varable can be found anywhere in the javascript code.
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}                              
