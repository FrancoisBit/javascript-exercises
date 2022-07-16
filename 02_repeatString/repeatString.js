const repeatString = function(string, numberOfTime) {
    if(numberOfTime > 0) {
        let repeatString = string;

        for(let i = 1 ; i < numberOfTime; i++) {
            repeatString = repeatString.concat(string);
        }

        return repeatString;
    }

    else if(numberOfTime === 0) {
        return "";
    }

    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
