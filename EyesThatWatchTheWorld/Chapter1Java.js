function getScrollPercentage() { 
    let scrollTop= window.scrollY;
    let maxScroll= document.documentElement.scrollHeight - window.innerHeight;
    let percentage= (scrollTop/maxScroll)*100;
    return percentage;
}

window. addEventListener('scroll', function() {
    let percentage= getScrollPercentage();
    console.log(percentage);
    
    let plot1 = document.querySelector(".plot1");
    let plot2 = document.querySelector(".plot2");
    let plot3 = document.querySelector(".plot3");
    let plot4 = document.querySelector(".plot4");
    let Chapter1img1 = document.querySelector(".Chapter1img1");
    let Chapter1img2 = document.querySelector(".Chapter1img2");
    let Chapter1img4 = document.querySelector(".Chapter1img4");
    let Chapter1img5 = document.querySelector(".Chapter1img5");
    let s1 = document.querySelector(".s1");
    let s2 = document.querySelector(".s2");
    let s3 = document.querySelector(".s3");
    let s4 = document.querySelector(".s4");
    if (percentage >0){
      plot1.classList.add('show');

    let lonelyBgm = document.createElement("audio");
    lonelyBgm.id = "lonelyBgm";
    lonelyBgm.src = "Assets/test.wav";
    lonelyBgm.loop = true;
    lonelyBgm.preload = "auto";
    lonelyBgm.style.display = "none";
    document.body.appendChild(lonelyBgm);
    lonelyBgm.play();
    } 
    if (percentage >7){
      plot2.classList.add('show');
    } 
    if (percentage >2){
      Chapter1img1.classList.add('show');
    } 
    if (percentage >10){
      Chapter1img2.classList.add('show');
    } 
    if (percentage >15){
      Chapter1img4.classList.add('show');
      let bg = document.querySelector(".img2Wrap")
      bg.style.backgroundColor="rgb(238, 230, 222)";
    } 
    if (percentage >30){
      plot3.classList.add('show');
    } 
    if (percentage >35){
      Chapter1img5.classList.add('show');
    } 
    if (percentage >50){
      plot4.classList.add('show');
    } 
    
    if(percentage > 55 && percentage <= 65){
      document.querySelector('.s1').style.display = "flex";
      s1.classList.add('show');
      document.querySelector(".c1").style.transform="scale(5)";
    }else{
      document.querySelector('.s1').style.display = "none";
      document.querySelector(".c1").style.transform="scale(1)";
    }
    if(percentage > 65 && percentage <= 75){
      document.querySelector('.s2').style.display = "flex";
      s2.classList.add('show');
      document.querySelector(".c2").style.transform="scale(5)";
    }else{
      document.querySelector('.s2').style.display = "none";
      document.querySelector(".c2").style.transform="scale(1)";
    }
    if(percentage > 75 && percentage <= 85){
      document.querySelector('.s3').style.display = "flex";
      s3.classList.add('show');
      document.querySelector(".c3").style.transform="scale(1.5)";
      document.body.style.backgroundColor="rgb(133, 21, 21)";
    }else{
      document.querySelector('.s3').style.display = "none";
      document.querySelector(".c3").style.transform="scale(1)";
      document.body.style.backgroundColor="black";
    }
    if(percentage > 85 && percentage <= 95){
      document.querySelector('.s4').style.display = "flex";
      s4.classList.add('show');
      document.body.style.backgroundColor="rgb(162,35,35)";
    }else{
      document.querySelector('.s4').style.display = "none";
      document.body.style.backgroundColor="black";
    }
    // let catAngle = (30000/100) * percentage;
    // document.querySelector("#cat").style.transform="rotate(" + catAngle + "deg)";

});

let spanClick = document.querySelector(".spanClick");
spanClick.addEventListener("click", dialog)
function dialog(){
    let question = document.querySelector(".question");
    question.classList.add('show');
    let response = document.querySelector(".response");
    response.classList.add('show');
}

let plot3 = document.querySelector(".plot3");
let n = 0;
let paintSound = new Audio("Assets/draw.mp3")
function showPaint(){
  n=n+1;
  paintSound.pause();
  paintSound.currentTime = 0;
  paintSound.play();
  if (n==3){
  let paint = document.querySelector(".paint");
  paint.classList.add('show');
  }
}
plot3.addEventListener("click", showPaint)