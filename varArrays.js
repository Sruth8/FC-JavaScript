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
myArray[1] = 55; //myArray now equals 55 [88,55,66] changes the second number
 console.log(myArray)

 //Access Multi-Dimensional Arrays with Indexes
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]]; 

var myData = myArray[2][1]; //first 0 will get the first element in the array. [1,2,3]
                            //the second will get the number inside the []
console.log(myData)                            

//Manipulate Arrays with push()
var ourArray = ["Garfield", "R", "cat"];
ourArray.push(["happy", "joy"]); //this will push this element into the array shown above
   console.log(ourArray)

var myArray = [["John", 24], ["mouse", 2]];
myArray.push(["dog", 4])
  console.log(myArray)

//Manipulate Arrays with pop()
var  ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); //popped off the 3
   console.log(ourArray)
   
var myArray = [["Dude", 22], ["rat", 3]];
var removedFromMyArray = myArray.pop(); //popped off the ["rat", 3]
   console.log(myArray)   

