let IO1 = document.querySelector(".IO1");
IO1.addEventListener("click",function(){
    let lonelyBgm = document.createElement("audio");
    lonelyBgm.id = "lonelyBgm";
    lonelyBgm.src = "Assets/test.mp3";
    lonelyBgm.loop = true;
    lonelyBgm.preload = "auto";
    lonelyBgm.style.display = "none";
    document.body.appendChild(lonelyBgm);
    lonelyBgm.play();

    let t11 = document.querySelector("#t11");
    let t12 = document.querySelector("#t12");
    console.log("clicked");
    t11.classList.add("show");
    setTimeout(function(){
        t12.classList.add("show");
        t11.classList.add("hide");
    },5000);
    setTimeout(function(){
            t12.classList.add("hide");
    },10000);
})

let IO2 = document.querySelector(".IO2");
IO2.addEventListener("click",function(){
    console.log("clicked");
    let t2 = document.querySelector("#t2");
    t2.classList.add("show");
    setTimeout(function(){
        t2.classList.add("hide");
    },5000);
})

let IO3 = document.querySelector(".IO3");
IO3.addEventListener("click",function(){
    console.log("clicked");
    let t3 = document.querySelector("#t3");
    t3.classList.add("show");
    setTimeout(function(){
        t3.classList.add("hide");
    },5000);
})
let IO4 = document.querySelector(".IO4");
IO4.addEventListener("click",function(){
    console.log("clicked");
    let t4 = document.querySelector("#t4");
    t4.classList.add("show");
    setTimeout(function(){
        t4.classList.add("hide");
    },4000);
})

let IO5 = document.querySelector(".IO5");
IO5.addEventListener("click",function(){
    let t51 = document.querySelector("#t51");
    let t52 = document.querySelector("#t52");
    console.log("clicked");
    t51.classList.add("show");
    setTimeout(function(){
        t52.classList.add("show");
        t51.classList.add("hide");
    },4000);
    setTimeout(function(){
            t52.classList.add("hide");
    },8000);
})

let IO6 = document.querySelector(".IO6");
IO6.addEventListener("click",function(){
    let t61 = document.querySelector("#t61");
    let t62 = document.querySelector("#t62");
    console.log("clicked");
    t61.classList.add("show");
    setTimeout(function(){
        t62.classList.add("show");
        t61.classList.add("hide");
    },4000);
    setTimeout(function(){
            t62.classList.add("hide");
    },8000);
})

let IO7 = document.querySelector(".IO7");
IO7.addEventListener("click",function(){
    console.log("clicked");
    let t7 = document.querySelector("#t7");
    t7.classList.add("show");

    document.querySelector('.character2').style.display = "flex";
    document.querySelector('.character1').style.display = "none";
    setTimeout(function(){
        t7.classList.add("hide");
    },4000);
})

let IO9 = document.querySelector(".IO9");
IO9.addEventListener("click",function(){
    console.log("clicked");
    document.querySelector('.character').style.display = "flex";
    document.querySelector('.character2').style.display = "none";
})

let IO10 = document.querySelector(".IO10");
IO10.addEventListener("click",function(){
    let t81 = document.querySelector("#t81");
    let t82 = document.querySelector("#t82");
    console.log("clicked");
    t81.classList.add("show");
    setTimeout(function(){
        t82.classList.add("show");
        t81.classList.add("hide");
    },2000);
    setTimeout(function(){
            t82.classList.add("hide");
    },6000);
})

let IO11 = document.querySelector(".IO11");
IO11.addEventListener("click",function(){
    console.log("clicked");
    let t9 = document.querySelector("#t9");
    t9.classList.add("show");

    let grave = document.querySelector(".IO11grave")
    grave.classList.add("show");
    let people = document.querySelector(".IO11");
    people.classList.add("hide");

    setTimeout(function(){
        t9.classList.add("hide");
    },3000);
})


let IO12 = document.querySelector(".IO12");
let flash = document.querySelector(".screen-flash");
if (!flash) {
  flash = document.createElement("div");
  flash.className = "screen-flash";
  document.body.appendChild(flash);
}

IO12.addEventListener("click", function () {
  console.log("clicked");
  let t10 = document.querySelector("#t10");
  t10.classList.add("show");

  setTimeout(function () {
    t10.classList.add("hide");
  }, 2500);

  flash.classList.add("visible");
  setTimeout(function () {
    flash.classList.remove("visible");
  }, 180);
});

let IO13 = document.querySelector(".IO13");
IO13.addEventListener("click",function(){
    console.log("clicked");
    let t121 = document.querySelector("#t121");
    t121.classList.add("show");
    
    setTimeout(function(){
        t121.classList.add("hide");
    },2500);

      flash.classList.add("visible");
  setTimeout(function () {
    flash.classList.remove("visible");
  }, 180);
})

let IO14 = document.querySelector(".IO14");
IO14.addEventListener("click",function(){
    console.log("clicked");
    let t111 = document.querySelector("#t111");
    t111.classList.add("show");
    
    setTimeout(function(){
        t111.classList.add("hide");
    },2500);

      flash.classList.add("visible");
  setTimeout(function () {
    flash.classList.remove("visible");
  }, 180);
})

let IO15 = document.querySelector(".IO15");
IO15.addEventListener("click",function(){
    console.log("clicked");
    let t13 = document.querySelector("#t13");
    t13.classList.add("show");
    
    setTimeout(function(){
        t13.classList.add("hide");
    },4000);
})

let IO16 = document.querySelector(".IO16");
IO16.addEventListener("click",function(){
    console.log("clicked");
    let t14 = document.querySelector("#t14");
    t14.classList.add("show");
    
    setTimeout(function(){
        t14.classList.add("hide");
    },2500);
})

let IO17 = document.querySelector(".IO17");
IO17.addEventListener("click",function(){
    let t151 = document.querySelector("#t151");
    let t152 = document.querySelector("#t152");
    let t153 = document.querySelector("#t153");
    let t154 = document.querySelector("#t154");
    console.log("clicked");
    t151.classList.add("show");
    setTimeout(function(){
        t152.classList.add("show");
        t151.classList.add("hide");
    },2000);
    setTimeout(function(){
        t153.classList.add("show");
        t152.classList.add("hide");
    },5000);
    setTimeout(function(){
        t154.classList.add("show");
        t153.classList.add("hide");
    },9000);
    setTimeout(function(){
        t154.classList.add("hide");
    },12000);
})