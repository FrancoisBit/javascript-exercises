const reverseString = function(string) {
    let arrayString = string.split("");
    arrayString = arrayString.reverse();
    
    return arrayString.join("");
};

// Do not edit below this line
module.exports = reverseString;
