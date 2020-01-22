//Declare String Variables
var firstName = "Drew";
var lastName = "Condor";

//Escaping Literal Quates in Strings
var myString = "I'm a \"double quoted\" string inside \"double quotes\"";
console.log(myString)

//Quoting Strings with Single Qoutes
var mySingleQstring = '<a href="http://www.expample.com" target="_blank">Link</a>';

//Escape Sequences in Strings
 /*****
  CODE OUTPUT
  \'  single quote
  \"  double quote
  \\  backslash
  \n  newline
  \r  carriage return
  \t  tab
  \b  backspace
  \f  form feed

  *****/

  var myStrg = "FirstLine\n\t\\SecondLine\nThirdLine"
  console.log(myStrg)

  //Concatenating Strings with Plus Operator
  var ourStr = "I come first. " + "I come second. ";
    console.log(ourStr)

 //Concatenating Strings with Plus Equals Operator
 var ourStrig = "I come first. ";
 ourStrig += "I come second.";
   console.log(ourStrig)
  
//Constructing Strings with Variables
var  myName = "Nikkie";
var  myStrName = "Hello, my name is " + myName + ", Whatz good?";  
   console.log(myStrName)

// Appending Variables to Strings
var  anAdjective = "awesome!";
var  ourStr = "freeCodeCamp is " ;
ourStr += anAdjective;
   console.log(ourStr)

