const test = require('tape');
const whiteSpaceFunc = require('../scripts/public/whiteSpaceFunc.js');


test('testing tape', function (t) {
    const actual = 1;
    const expexted = 1;
t.deepEquals(actual, expexted, 'tape works');
t.end();
});

// test('testing if function returns string', function (t) {
//     const actual = whiteSpaceFunc('string');
//     const expexted = 'string';
// t.equal(actual, expexted, 'should return string');
// t.end();
// });

test('testing if function returns typeof string', function (t) {
   const result = whiteSpaceFunc('Money')
    
    const actual = typeof result;
    const expexted = 'object';
t.deepEquals(actual, expexted, 'should return string');
t.end();
});

test('testing if string white space is filled with %20', function (t) {     
     
    
    const actual = whiteSpaceFunc('Nelson Mandela');
    const expexted = ['Nelson%20Mandela', 'Nelson+Mandela'];
 t.deepEquals(actual, expexted, 'white space filled accordingly');
 t.end();
 });

 
 