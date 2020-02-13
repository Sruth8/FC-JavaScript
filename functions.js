//-------Write Reuseable Code with Functions--------
function myReusableFunction() {
    console.log("Yoooo, Winning");
}

myReusableFunction(); //calling the function here

//---------Passing Values to Functions with Arguments--------
function myFunctionWtihArgs(a, b) {
    console.log(a - b); //output 5
    console.log(a + b); //output 15
}
   myFunctionWtihArgs(10, 5);// Output 5

//---------Global Scope and Functions.---------- 
                              // Scope refers to the visiablity of varables out side of the function block
                              // Global means your varable can be found anywhere in the javascript code.
var myGlobal = 10;

function fun1(){
 oopsGlobal = 5; //putting this here without the "var" makes this statment Global
}
    function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {       // != means does not equal
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}                              
fun1();
fun2();

//------- Local Scope and Functions-----
function myLocalScope() {

    console.log(myVar);

}

myLocalScope();

console.log(myVar); //<--- this will not work. you cant't access "myVar" outside the function

//------ Global vs. Local Scope in Function------------
var outerWear = "T-Shirt";   //you can have local and Global varibles with the same name

function myOutfit() {

    return outerWear;
}

console.log(myOutfit());
