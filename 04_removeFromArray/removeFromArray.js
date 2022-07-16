const removeFromArray = function(array, ...args) {
    args.forEach((itemArgs) => {
        array.forEach((itemArray, index) => {
            if(itemArgs === itemArray) {
                array.splice(index, 1);
            }
        })
    })

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
