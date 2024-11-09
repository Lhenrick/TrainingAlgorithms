var argumentsLength = function(...args) {
    
    let length
    if(args.length == 0){
        length = 0
        console.log("Length IF: " + length);
        return length


    } else {
        
        console.log("Length Else: " + length);
        
        for(let i = 0; i < args.length; i++){
            console.log(`I` + i);
            
            length = i;
        }
        
        return length + 1
    }

    
};

console.log(`Primeiro:` + argumentsLength(1, 2, 3));
console.log(`Segundo:` + argumentsLength({},null,"3"));
console.log(`Terceiro:` + argumentsLength());
console.log(`Quarto:` + argumentsLength(5));


