let Myname = "Aster "
let temperature = "12 "

let headline = document.querySelector("hi")
let myText = document.querySelector("p")

document.querySelector('h1').innerText = "????????";

//alert("Hi "+Myname+"It is "+temperature+"degrees right now.")

console.log("The page is loaded and the temperature is "+ temperature);
document.querySelector("h4").innerText = "1111111";


function doManyThings(){
    console.log("Button is clicked")
    alert("Hi "+Myname+"It is "+temperature+"degrees right now.")
    document.querySelector('button').innerText = "11111"
}

function greet(){
    console.log("receive greeting")
    alert("The greeting")
    document.querySelector('button').innerText = "11111"
}

function changeText(){
    console.log("functioning")
    myText.innerText = "SOOOOOOOOOOOOOOO"
    //document.querySelector('p').innerText="it changed"
    headline.style.textDecoration = "underline";
}
