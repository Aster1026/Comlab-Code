// let minutesBox = document.querySelector(".minutes");
let flash = document.querySelector("#flash");


function getTheTime(){
    let now= new Date();
    console.log(now);
    let h = now.getHours();
    let realHour = h % 12;
    let activePlanet = document.querySelector("#planet"+realHour);
    activePlanet.classList.add('active');
    let m = now.getMinutes();

    console.log(realHour,m);

    // minutesBox.innerHTML = "";
    let minutesBox = activePlanet.querySelector(".minutes")

    repeat(m, function(){
        let star = document.createElement("img")
        star.src = 'star.png';
        star.className = 'star';
        minutesBox.append(star);
        star.style.left = (Math.cos(Math.PI)*50)+"px";
        star.style.top = (Math.sin(Math.PI)*50)+"px";
    })
}

setInterval(getTheTime, 1000);

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function secondsFlash(){
        
    setTimeout(function(){
    flash.classList.add('flashAnimation');
    }, 100);
    flash.classList.remove('flashAnimation');
}


let flashInterval = setInterval(function(){
    secondsFlash();
},1000);