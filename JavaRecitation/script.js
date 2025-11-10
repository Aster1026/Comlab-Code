let letter = document.querySelector("#letter");
let greet = document.querySelector("#greet");

function show(){
    console.log("Button is clicked");

    let content = document.createElement("p");
    content.classList.add('generated');
    content.innerText = "Dear Mikan: I'm so glad to be friends with you! I wish you happiness every day!";

    let r1 = 10+ Math.random() * 50;
    content.style.fontSize = r1 + "px";
    console.log("fontSize:",r1);

    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    content.style.color = "rgb(" + r + ", " + g + ", " + b + ")";

    letter.append(content);
}

function clearEverything(){
console.log("clicked");
    let letterEl = document.querySelector("#letter");
    let items = letterEl.querySelectorAll(".generated");
    items.forEach(function(el){ el.remove(); });
}

function showFirework(){
    let img = document.createElement('img');
    img.src = 'firework.png';
    img.alt = 'firework';
    img.className = 'firework';

    bg.append(img);
    let w = Math.floor(100 + Math.random() * 300);
    img.style.width = w + 'px';
    //img.style.width = '200px';

    img.style.position = 'absolute';
    img.style.left = Math.random() * 1200 + 'px';
    img.style.top  = Math.random() * 600 + 'px';
}

function talk(){
    console.log("Button is clicked");

    let greeting = document.createElement("p");
    greeting.classList.add('greeting');
    greeting.innerHTML = "You: Hi Mikan! I've got a postcard for you~ <br>Mikan: Thx! Let us hurry to see the fireworks!~";

    greet.append(greeting);

    let trigger = document.createElement("button");
    trigger.classList.add('button');
    trigger.innerHTML = '<a href="firework.html">Go</a>';
    greet.append(trigger);

    let img1 = document.createElement('img');
    img1.src = 'Mikan.png';
    img1.alt = 'Mikan';
    img1.className = 'Mikan';
    greet.append(img1);
    
    document.querySelector(".talkButton").remove();
    document.querySelector(".firstImage").remove();
}

function response(){

}