// -----------Boolean Values---------  
function welcomeToBooleans() {
    return false;    //true is on and false is off
}

//-------- Use Conditional Logic with "if" statements -------
function ourTrueOrFalse(isItTrue) {
    if (ifItTrue) {    // "if" statments help make decisions in code
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
 if (wasThatTrue) {
     return "Yes, that was true";
 }
 return "No, that was false";
}
  console.log(trueOrFalse(true));




// ------- Comparison with the Equality Operator or Boolean operator ------//
function testEqual(val) {  // the "val" is one Equality Operator
   if (val == 12) {            // want to see if "val"  = 12  true or false
       return "Equal";
   }
   return "Not Equal";
}

console.log(testEqual(10));
console.log(testEqual(12));
