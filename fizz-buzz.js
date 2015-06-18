module.exports = {
    generate: function(startAt, endAt){
        if(!endAt){
            endAt = startAt;
            startAt = 1;
        }
       var results = []; 
       for(var i = startAt; i <= endAt; i++){
           if(isFizzBuzz(i))
              results.push("FizzBuzz");
           else if(isFizz(i))
                results.push("Fizz");
            else if(isBuzz(i))
                results.push("Buzz");
            else
                results.push(i);
       }
       return results;
    },
    generateReverse: function(startAt, endAt){
        if(!endAt){
            endAt = startAt;
            startAt = 1;
        }
       var results = []; 
       for(var i = startAt; i <= endAt; i++){
           if(isFizzBuzz(i))
              results.push("FizzBuzz");
           else if(isFizz(i))
                results.push("Fizz");
            else if(isBuzz(i))
                results.push("Buzz");
            else
                results.push(i);
       }
       return results.reverse();
    }
};

function isFizz(input){
    return input % 3 == 0;
}

function isBuzz(input){
    return input % 5 == 0;
}

function isFizzBuzz(input){
    return isFizz(input) && isBuzz(input);
}
