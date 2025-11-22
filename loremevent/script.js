let s = document.querySelector("span");
console.log(s)

function move(eventInfo){
    console.log(eventInfo.target);
    let element = eventInfo.target;
    element.style.color = "red";

    let randomX = -50+ Math.random()*100;
    let randomY = -50+ Math.random()*50;
    element.style.transform = 'translateX(' + randomX + 'px) translateY(' + randomY + 'px)';


}

//s.addEventListener("mouseover",move)

let allSpans = document.querySelectorAll("span");

allSpans.forEach(addMover);

function addMover(element){
    element.addEventListener("mouseover",move);
}
