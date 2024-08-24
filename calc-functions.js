const add = function(x, y) {
	return(x + y);
};

const subtract = function(x, y) {
	return(x - y);
};

const multiply = function(...nums) {
    let result = 1;
    for (let num of nums) {
      result *= num;
    }
    return(result);
  };

const divide  = function(x, y) {
    return(x / y);
};