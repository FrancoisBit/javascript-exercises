const ftoc = function(temperatureF) {
    let temperatureC = (temperatureF - 32) / 1.8;
    temperatureC = Math.round(temperatureC * 10) / 10;

    return temperatureC;
};

const ctof = function(temperatureC) {
    let temperatureF = (temperatureC * 1.8) + 32;
    temperatureF = Math.round(temperatureF * 10) / 10;
    
    return temperatureF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
