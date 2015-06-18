module.exports = {
    generate: generate,
    generateReverse: generateReverse
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

function generate(startAt, endAt){
    if(!endAt){
        endAt = startAt;
        startAt = 1;
    }
   var results = []; 
   for(var i = startAt; i <= endAt; i++){
       addItem(results, i);
   }
   return results;
}

function generateReverse(startAt, endAt){
   return generate(startAt, endAt).reverse(); 
}

function addItem(arr, input ){
   if(isFizzBuzz(input))
      arr.push("FizzBuzz");
   else if(isFizz(input))
        arr.push("Fizz");
    else if(isBuzz(input))
        arr.push("Buzz");
    else
        arr.push(input);
}