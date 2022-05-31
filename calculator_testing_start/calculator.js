const sum = function(a, b){
    return a + b;
};

const subtract = (...args) => {
    let total = args[0];
    for(let i = 1; i< args.length; i++) {
        total -= args[i];
       
    }
    return total;
}

const multiply = (...args) => {
    let total = 1;
    for(let num of args){
        total *= num;
    }

    return total;

}

const divide = (...args) => {
    let total = args[0];
    for(let i = 1; i< args.length; i++) {
        total /= args[i];
    }
    return total;
}


const modulus = (...args) => {
    let total = args[0];
    for(let i = 1; i< args.length; i++) {
        total %= args[i];
    }
    return total;
}

const even = (a) => {
    
    return a % 2 == 0 ? true : false; 
}

const odd = (b) => {
    
    // return b % 2 != 0 ? true : false; 
    return !even(b);
}

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
