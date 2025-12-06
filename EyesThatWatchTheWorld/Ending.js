let t2 = document.querySelector(".text2");
let t1 = document.querySelector(".text1");
let ending1 = document.querySelector(".ending1")
setTimeout(function(){
    t2.style.display = "block";
},5000);

let t3 = document.querySelector(".text3");
setTimeout(function(){
    t3.style.display = "block";
},10000);

let t4 = document.querySelector(".text4");
setTimeout(function(){
    t4.style.display = "block";
},15000);

let t5 = document.querySelector(".text5");
setTimeout(function(){
    t5.style.display = "block";
},20000);

let t6 = document.querySelector(".text6");
setTimeout(function(){
    t6.style.display = "block";
},25000);

let t7 = document.querySelector(".text7");
setTimeout(function(){
    t7.style.display = "block";
},30000);

let tending = document.querySelector(".textending");
setTimeout(function(){
    tending.style.display = "block";
    t1.style.display = "none";
    t2.style.display = "none";
    t3.style.display = "none";
    t4.style.display = "none";
    t5.style.display = "none";
    t6.style.display = "none";
    t7.style.display = "none";
    ending1.style.display = "none";
},35000);