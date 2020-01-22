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

// Find Length of String
var firstNameLength = 0;
var firstName = "Nikkie";   

firstNameLength = firstName.length;
  console.log(firstNameLength) 
  
//Bracket Notation to Find First Character in String
var firstLetterOfFirstName = "";
var firstName = "Nikkie";

firstLetterOfFirstName = firstName[0];
  console.log(firstLetterOfFirstName)

//String Immutability
var myStr = "Hey you!";
myStr = "Bye you!";
 console.log(myStr) 

//Bracket Notation to Find sixth Character in String
var firstName = "Nikkie";
var lastLetterOfFirstName = firstName[firstName.length -1];
  console.log(lastLetterOfFirstName)

// Bracket Notation to Find Nth-to-Last Character in String
var secondLetterOfFirstName = "";
var firstName = "Nikkie";

secondLetterOfFirstName = firstName[1]; //second character in name
  console.log(secondLetterOfFirstName)   

//Bracket Notation to find Last Character in String
var lastName = "Clemm";
var lastLetterOfLastName = lastName[lastName.length -1];
  console.log(lastLetterOfLastName)

  //--------Word Blanks-------- Game------

  function wordBlanks(myNoun, MyAdjective, myVerb, MyAdverb) {
      var result = "";
      result += "The " + MyAdjective + " " + myNoun + " " + myVerb + " really " + MyAdverb;
      return result;
  }

console.log(wordBlanks("cat", "small", "climb", "fast"));
console.log(wordBlanks("fish", "large", "swim", "slow"));


//Store Multiple Values with Arrays
var myArray = ["Kash", 22];

//Nested Arrays
var nestArray = [["The Vortex", 666], ["Power", 0100]]; //two arrays in an array


// Access Array Data with Indexes
var myArray = [80,70,40];
var myData = myArray[0]; //equals 80
  console.log(myData)

//Modify Array Data With Indexes
var myArray = [88,44,66];
myArray[1] = 55; //myArray now equals 55 [88,55,66]
   console.log(myArray)

