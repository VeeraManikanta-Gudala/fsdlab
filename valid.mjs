import { z } from "zod";
import PromptSync from "prompt-sync";
const prompt = PromptSync();
function validname(){
var name = prompt('Enter your name:');
const sche = z.string().min(3).max(15).regex(/^[a-zA-Z]+$/);

if(sche.safeParse(name).success == true){

    console.log("name is verified");
    return true;
}else{

    console.log("Username should have minimum 3 letters, maximum 15 letters and only contains alphabets");
    return false;
}
}
function validmail(){
    var mail = prompt('Enter your mail:');

var myshema = z.string().email();

if(myshema.safeParse(mail).success == true){
    
    console.log("mail is verified");
    return true;    
}else{
    
    console.log("mail cant be parsed");
    return false;
}

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