var Person = require("../person");
/* globals describe it expect beforeEach */
describe("Person", function(){
   it("exists", function(){
       expect(Person).toBeDefined();
   }); 
   
   describe("creating a person", function(){
       describe("with a name of eric", function(){
           var person;
           beforeEach(function(){
               person = Person("Eric", "Katz");
           });
           it("has a firstName of Eric", function(){
               expect(person.firstName).toEqual("Eric");
           });
           it("has a lastName of Eric", function(){
               expect(person.firstName).toEqual("Eric");
           });
           it("has a fullName() of 'Eric Katz'", function(){
               expect(person.fullName()).toEqual("Eric Katz");
           })
       });
   });
});