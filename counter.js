var createCounter = function (n) {
    let number = n;
 
    return function counter(){
        
        number = number + 1;           
        
        return number
    }
    
};

const counter = createCounter(10)
 console.log(counter()) // 10
 console.log(counter()) // 11
 console.log(counter()) // 12