function validUsername(name) {
 
    if(name.length<3 || name.length > 25){
        console.log("Username length should be between 3 and 25");
        
        return false;
    }
    if(!/[a-zA-Z]+$/.test(name)){
        console.log("Username should only contain alphabets.");
        
        return false;
    }
    return true;
}
function validEmail(email) {
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        console.log("Invalid Email");
        
        return false;
    }
    return true;
}
function validPassword(Password){
    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password)){
        console.log("password must contain alphanumeri and special characters");
        
        return false;
    }
    return true;
}

module.exports = {
    validUsername,validEmail,validPassword
}