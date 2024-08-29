
var prompt = require('prompt-sync')();

var n = prompt('Enter a  number: ');

if(n%2==0){

    console.log(n+" is even");

}else{

    console.log(n+" is odd");
    
}