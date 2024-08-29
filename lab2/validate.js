const prompt = require('prompt-sync')();
const validator = require('validator');

function validname(){
    var name = prompt("Enter your name: ");
    if(name.length<3 || name.length > 25){
        return false;
    }
    if(!/[a-zA-Z]/.test(name)){
        return false;
    }
    return true;
}
var res = validname();
while(!res){
    let res1=validname()
    if(res1){
        break;
    }
}

var res2 = validmail();
while(!res2){
    let res1=validmail()
    if(res1){
        break;
    }
}