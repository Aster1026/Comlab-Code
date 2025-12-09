let plot2 = document.querySelector(".plot2");
let n = 0;
let paintSound = new Audio("Assets/draw.mp3");
let penFall = new Audio("Assets/penFall.mp3");
plot2.addEventListener("click", Paint);
function Paint(){
  n=n+1;
  paintSound.pause();
  paintSound.currentTime = 0;
  paintSound.play();
  if (n==1){
  let ii1 = document.querySelector(".ii1");
  ii1.classList.add('show');
  console.log("showed");
  }
    if (n==2){
  let ii2 = document.querySelector(".ii2");
  ii2.classList.add('show');
  }
    if (n==3){
  let ii3 = document.querySelector(".ii3");
  ii3.classList.add('show');
  }
    if (n==4){
  paintSound.pause();
  penFall.play();
  let ii4 = document.querySelector(".ii4");
  ii4.classList.add('show');
  }
}

let plot4 = document.querySelector(".plot4");
plot4.addEventListener("click",Florence);
function Florence(){
    let ii5 = document.querySelector(".ii5");
    ii5.classList.add('show');
    let ii6 = document.querySelector(".ii6");
    ii6.classList.add('show');
}




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
    let Chapter4img1 = document.querySelector(".Chapter1img1");
    let Chapter4img2 = document.querySelector(".Chapter4img2");
    let Chapter4img3 = document.querySelector(".Chapter4img3");
    let Chapter4img4 = document.querySelector(".Chapter4img4");
    let Chapter4img5 = document.querySelector(".Chapter4img5");
    let s1 = document.querySelector("#scroll1");
    let s2 = document.querySelector("#scroll2");
    let s3 = document.querySelector("#scroll3");
    let s4 = document.querySelector("#scroll4");
    let s5 = document.querySelector("#scroll5");
    let s6 = document.querySelector("#scroll6");
    let s7 = document.querySelector("#scroll7");
    let s8 = document.querySelector("#scroll8");
    let s9 = document.querySelector("#scroll9");
    let s10 = document.querySelector("#scroll10");
    let s11 = document.querySelector("#scroll11");
    let s12 = document.querySelector("#scroll12");
    let s13 = document.querySelector(".scroll13");
    if (percentage >0){
      plot1.classList.add('show');
    } 
    if (percentage >3.5){
      plot2.classList.add('show');
    } 
    if (percentage >1){
      Chapter4img1.classList.add('show');
    } 


    let endBgm = document.createElement("audio");
    endBgm.id = "endBgm";
    endBgm.src = "Assets/end.mp3";
    endBgm.loop = true;
    endBgm.preload = "auto";
    endBgm.style.display = "none";
    let test = document.querySelector("#endBgm");

    console.log(test);

    if (percentage >4 && test == null){
      Chapter4img2.classList.add('show');
          document.body.appendChild(endBgm);
    endBgm.play();
    } 

    if (percentage >9){
      Chapter4img3.classList.add('show');
      
    } 
    if (percentage >18){
      plot3.classList.add('show');
    } 
    if (percentage >20){
      Chapter4img4.classList.add('show');
      Chapter4img5.classList.add('show');
      plot4.classList.add('show');
    } 
    if (percentage >27 && percentage<32){
      s1.style.display = "flex";
      s1.classList.add('show');
    } else{
    s1.style.display = "none"; 
    }
    if (percentage >32 && percentage<37){
      s2.style.display = "flex";
    } else{
    s2.style.display = "none"; 
    }
    if (percentage >37 && percentage<42){
      s3.style.display = "flex";
    } else{
    s3.style.display = "none"; 
    }
    if (percentage >42 && percentage<47){
      s4.style.display = "flex";
    } else{
    s4.style.display = "none"; 
    }
    if (percentage >47 && percentage<52){
      s5.style.display = "flex";
    } else{
    s5.style.display = "none"; 
    }
    if (percentage >52 && percentage<57){
      s6.style.display = "flex";
    } else{
    s6.style.display = "none"; 
    }
    if (percentage >57 && percentage<62){
      s7.style.display = "flex";
    } else{
    s7.style.display = "none"; 
    }
    if (percentage >62 && percentage<67){
      s8.style.display = "flex";
    } else{
    s8.style.display = "none"; 
    }
    if (percentage >67 && percentage<72){
      s9.style.display = "flex";
    } else{
    s9.style.display = "none"; 
    }
    if (percentage >72 && percentage<77){
      s10.style.display = "flex";
    } else{
    s10.style.display = "none"; 
    }
    if (percentage >77 && percentage<82){
      s11.style.display = "flex";
    } else{
    s11.style.display = "none"; 
    }
    if (percentage >82 && percentage<87){
      s12.style.display = "flex";
    } else{
    s12.style.display = "none"; 
    }
    // let catAngle = (30000/100) * percentage;
    // document.querySelector("#cat").style.transform="rotate(" + catAngle + "deg)";
    if (percentage >87 && percentage<=101){
      s13.style.display = "flex";
      s13.classList.add('show');
    } else{
    s13.style.display = "none"; 
    }
});