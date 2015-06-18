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
    });
});