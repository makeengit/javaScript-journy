
// selecting msg
let msg = document.querySelector(".msg");

let message ='Have a Good Day !';
// create arrray of words 
let word = message.split(" ");

//function take 2 parameter

let index = 0;
let interval = setInterval(function(){
    msg.innerHTML += word[index] + " ";
    index++;
    if(index == word.length){
        clearInterval(interval);
    }
//1000 mean 1second

}, 500)
