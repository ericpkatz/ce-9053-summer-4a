module.exports = function(firstName, lastName){
    return new Person(firstName, lastName);   
};

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName;
    }
}
