function isFizz(input){
    return input % 3 == 0;
}

module.exports = {
    generate: function(startAt, endAt){
        if(!endAt){
            endAt = startAt;
            startAt = 1;
        }
       var results = []; 
       for(var i = startAt; i <= endAt; i++){
           if( i % 3 == 0 && i % 5 == 0)
              results.push("FizzBuzz");
           else if(isFizz(i))
                results.push("Fizz");
            else if(i % 5 == 0)
                results.push("Buzz");
            else
                results.push(i);
       }
       return results;
    }
};