

function lowerValue(arrProducts, inicialPosition){
    let cheaper = inicialPosition;
    
    for(let current = inicialPosition; current < arrProducts.length; current++){
    
        if(arrProducts[current].price < arrProducts[cheaper].price){
            cheaper = current
        }
    }
    return cheaper;

}

module.exports = lowerValue;


