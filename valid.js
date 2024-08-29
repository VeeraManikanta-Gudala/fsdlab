var readlineSync = require('readline-sync');
function validUsername(name) {
 
    if(name.length<3 || name.length > 25){
        return false;
    }
    if(!/[a-zA-Z]/.test(name)){
        return false;
    }
    return true;
}
function validEmail() {
    var email = readlineSync.question("Enter Email:")
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        return false;
    }
    return true;
}
function validPassword(){
    var Password = readlineSync.question("Enter Password:",{hideEchoBack:true})
    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password)){
        return false;
    }
    return true;
}
module.exports = {
    validUsername,validEmail,validPassword
}