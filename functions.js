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
 var myVar = 3;
    console.log(myVar);

}

myLocalScope();

//console.log(myVar); //<--- this will not work. you cant't access "myVar" outside the function



//------ Global vs. Local Scope in Function------------
var outerWear = "T-Shirt";   //you can have local and Global varibles with the same name
                             
function myOutfit() { 
   var outerWear = "pants"; //The local takes priority over Global
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear); // this is logged 2nd

//-------- Return a Value from a function --------
 function minusSeven(num) {
     return num -7;
 }

 console.log(minusSeven(10)); //this should log a 3

 function miltiEight(num) {
    return num * 8;
}

console.log(miltiEight(5)); //this should log a 40

//---------Understanding Undefined Value Returned from a Function---------//
  var sum = 0;           
  function addThree() {
      sum += 3; //sum = sum + 3; //no return statement logs out undifined. must specify a return value to work
  }

// ---------Assignment with a Returned Value ----------
 var changed = 0;  //intilized "changed" here
   function change(num) {
       return (num + 5) / 3;
   } 

  changed = change(10); //then the value of the return will stored here in "changed"
  
  var processed = 0;
   function processArg(num) {
       return (num + 3) / 5;
   }
processed = processArg(7);

//----------Stand in Line--------
  function nextInLine(arr, item) {
 arr.push(item);
    return arr.shift(); //removes then returns the first item 2
  }

  var testArr = [1,2,3,4,5];

  console.log("Before: " + JSON.stringify(testArr)); //this JSON.stringify changes the array in to a string
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

