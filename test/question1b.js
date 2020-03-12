'use strict';
var expect = require('chai').expect;
const HelloJS = require('../hello.js');
const testingEnabled = HelloJS.question1bTest ;

if(testingEnabled === true)
{
	describe('Question 1B', function()	{
			it('An array should be created storing the number of beetles', function()	{
				var actualArray = HelloJS.testBeetlesArray;
				
				//Guess we can assume that the array is created and the two arrays have been joined randomly
				//E.g. that each contestant have been assigned a random value of beetles eaten
				//Then make a comparison solely on the function to remove a contestant and check that array has decreased by one
				
			});
		});
}
