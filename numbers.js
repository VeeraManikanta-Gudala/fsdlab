import PromptSync from "prompt-sync";

const prompt = PromptSync();

var n = prompt('Enter a number:');

if(n[0] === '+'){

    var n1 = n.slice(1);

    var n2 = parseInt(n1);

    console.log(n2)

    if(n2>0){

        n2%2===0? console.log("given number "+n+"is Positive even number"):console.log("given number "+n+" isPositive odd number");
        
    }
    else{
        console.log("Invalid input");
        
    }
}
else if(n == 0){
    console.log("given number "+n+" isZERO");
    
}
else if(n<0){
    n%2===0? console.log("given number "+n+" is Negaaive even number"):console.log("given number "+n+"is Negative odd number");
    
}else if(n>0 && isNaN(n)){
    n2%2===0? console.log("given number "+n+"is Positive even number"):console.log("given number "+n+" isPositive odd number");
    
}
else{
    console.log("Given input is invalid");
}

