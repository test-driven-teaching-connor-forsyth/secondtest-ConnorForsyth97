/* jshint esversion: 6 */

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis!\n'); 
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');


//Enable testing
//Here you can able testing for the various questions you will attempt
//To test set the variable to true, otherwise set to false
module.exports.question1aTest = true;
module.exports.question1bTest = true;

//Question 1A
var celebrityNames = ["Flash", "Anne", "Chelsee", "Corrie", "Des", "Zed"];
var testQuestion1A = celebrityNames.slice();
console.log("The names of the contestants are " + celebrityNames.toString());

//If you would like to test your answers for questions 1A, you will need to declare the variables in this export function
module.exports.testQuestion1A = testQuestion1A;

//Question 1B
var beetles = new Array(celebrityNames.length);
for (let i = 0; i < beetles.length; i++){
    beetles[i] = parseInt(Math.random()*1001);
}

console.log(beetles.toString());

//To test whether your beetles array is correct, you will need to declare the variables in this export function
module.exports.testBeetlesArray = beetles;

var min = beetles[0];
var personIndex = 0;

for (let i = 0; i < beetles.length; i++){
    if (beetles[i] < min){
        min = beetles[i];
        personIndex = i;       
    }
    console.log(personIndex);
}

console.log("The minimum number of beetles is " + min + " consumed by " + celebrityNames[personIndex] + "\nThat person is eliminated.");

function removeLowestElement(nameArray, numberArray){

    var min = numberArray[0];
    var personIndex = 0;

    for (let i = 0; i < numberArray.length; i++){
        if (min > numberArray[i] ){
            min = numberArray[i];
            personIndex = i;       
        }
    
    }
    console.log("The person removed was " + nameArray[personIndex] 
					+ " at position " + personIndex 
					+ " (starting at zero.)");

    nameArray.splice(personIndex,1);
    
    return nameArray;
}

var secondRoundContestants = removeLowestElement(celebrityNames, beetles);
