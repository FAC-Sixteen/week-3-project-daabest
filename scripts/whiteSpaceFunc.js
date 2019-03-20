var whiteSpaceFunc = function(str){

var arr = []; 
arr.push( str.replace(/\s/g, '%20'));
arr.push(str.replace(/\s/g, '+'));

return arr;
}


module.exports = whiteSpaceFunc;