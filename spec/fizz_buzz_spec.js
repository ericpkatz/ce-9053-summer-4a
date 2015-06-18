/* globals describe it beforeEach expect */
var FizzBuzz = require("../fizz-buzz");
describe("FizzBuzz", function(){
    it("exists", function(){
        expect(FizzBuzz).toBeDefined();
    });
    describe("#generate", function(){
        describe("passing in 5", function(){
            var results;
            beforeEach(function(){
                results = FizzBuzz.generate(5);
            });
            
            it("returns [1,2,'Fizz', 4, 'Buzz']", function(){
               expect(results).toEqual([1,2,'Fizz', 4, 'Buzz']); 
            });
        });
        describe("passing in 3", function(){
            var results;
            beforeEach(function(){
                results = FizzBuzz.generate(3);
            });
            
            it("returns [1,2,'Fizz']", function(){
               expect(results).toEqual([1,2,'Fizz']); 
            });
        });
        describe("passing in 14,15", function(){
            var results;
            beforeEach(function(){
                results = FizzBuzz.generate(14, 15);
            });
            
            it("returns [14, 'FizzBuzz']", function(){
               expect(results).toEqual([14, 'FizzBuzz']); 
            });
        });
    });
});