var m1import = require('./m1');
var m2import = require('./m2');
var m3import = require('./m3');
console.log("sum function in m2 " + m2import(m1import,m3import.b))
console.log("sub funciton in m3 " + m3import.sub(m1import,m3import.b));
