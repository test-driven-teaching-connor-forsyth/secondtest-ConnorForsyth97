'use strict';
var expect = require('chai').expect;
const HelloJS = require('../hello.js');
const testingEnabled = HelloJS.question1aTest;
var celebNames = HelloJS.testQuestion1A;
if(testingEnabled === true)
{
	describe('hello.js exists', function()  {
	  it('should exist', function() {
	      expect(HelloJS).to.not.be.undefined;
	  });
	});

	describe('Question 1A - Array created with the celebrities names', function()	{
		it('Names array should contain Flash, Anne, Chelsee, Corrie, Des and Zed', function()	{
			var question1a = ["Flash", "Anne", "Chelsee", "Corrie", "Des", "Zed"].map(v => v.toLowerCase());
			celebNames = celebNames.map(v => v.toLowerCase());
			var questionScore = 0;
			
			//Let's now check the array to determine the marks given
			//First check for whether it is an array or not
			//The array is actually passed in as an object so we will check typeof instead
			if((typeof celebNames == 'object') && (celebNames.length >=2 ))
			{
			  questionScore = questionScore + 4;
			  console.log("	You sucessfully created and populated an array, for this you got " + questionScore + " marks");
			}
			else if((typeof celebNames == 'object') && (celebNames.length <2))
			{
			  questionScore = questionScore + 1;
			  console.log("	You sucessfully created an array, however you need to populate the array with the names of the celebrities in the question.");
			}
			else{console.log("Logic wrong");}
			
			if(expect(celebNames).to.eql(question1a)){questionScore=questionScore+1;}
			console.log("	You got " + questionScore + "/5 for this question");
			expect(celebNames).to.eql(question1a);
		});
	});
}
