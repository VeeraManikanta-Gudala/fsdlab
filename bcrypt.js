var bcrypt = require('bcryptjs');
var readlineSync = require('readline-sync');
var valids = require('./valid.js')
const fs = require('fs');
function login(){
    var Username = readlineSync.question('Enter username:');

}
function signup(){
    var name = readlineSync.question("Enter Username:")

    var res = validUsername(name);
while(!res){
    let res1=validUsername(name)
    if(res1){
        break;
    }
}
fs.appendFileSync('usernames.txt',name);
var email = readlineSync.question("Enter Email:")
var res2 = validEmail(email);
while(!res2){
    let res1=validEmail(email)
    if(res1){
        break;
    }
}
fs.appendFileSync('emails.txt',email);
var pass = readlineSync.question("Enter Password:")
var res3 = validPassword(pass);
while(!res3){
    let res1=validPassword(pass)
    if(res1){
        break;
    }
}
fs.appendFileSync('Passwords.txt',name);
}
var choice = readlineSync.question('Press (1) for login\n press (2) for signup');
if(choice === 1){
    login();
}else{
    signup();
}


