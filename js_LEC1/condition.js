

var userValue;
var userBalance = 50000;
var amount;

userValue = Number(prompt("Enter the operation(1-withdraw 2-deposit 3-Transfar)"));

switch(userValue){
    case 1 :
    
    amount = Number(prompt("Enter the amount you want to withdraw"));

    if(amount <= 0){
        alert("Invalide amount");
    }
    else if(userValue <= userBalance){
        alert("withdraw   ok");}
    else{
        alert("withdraw not ok");
    }
    break;

    case 2 :
        alert("deposit ok");
        break;

    case 3 : 
    alert("Transfar ok");
        break;
    
        default:
            alert("Invalide input");


}