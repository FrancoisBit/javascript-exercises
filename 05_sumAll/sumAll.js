const sumAll = function(number1, number2) {
    let sum = 0;
    let minNumber = 0;
    let maxNumber = 0;

    if(number1 < 0 || number2 < 0) {
        return "ERROR";
    }

    if(typeof number1 != 'number' || typeof number2 != 'number') {
        return "ERROR";
    }

    if(number1 < number2) {
        minNumber = number1;
        maxNumber = number2;
    }

    else {
        minNumber = number2;
        maxNumber = number1;
    }

    for(let i = minNumber; i <= maxNumber; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
