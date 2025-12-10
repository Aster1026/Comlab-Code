

let i1 = document.querySelector(".i1");
i1.addEventListener("click", imagine)
function imagine(){

    let element1 = document.querySelector(".element1");
    element1.classList.add('show');

    let element2 = document.querySelector(".element2");
    element2.classList.add('show');

    let element3 = document.querySelector(".element3");
    element3.classList.add('show');

}

let i2 = document.querySelector(".i2");
i2.addEventListener("click", imagine2)
function imagine2(){

    let plot6 = document.querySelector(".plot6");
    plot6.classList.add('show');
}

let i5 = document.querySelector(".i5");
i5.addEventListener("click", imagine5)
function imagine5(){

    let plot8 = document.querySelector(".plot8");
    plot8.classList.add('show');
    let bgwhite = document.querySelector(".panel white");
    bgwhite.style.backgroundColor="rgba(255, 150, 105, 1)";
}

let i3 = document.querySelector(".i3");
i3.addEventListener("click", imagine3)
function imagine3(){

    document.querySelector('.togetherBlack').style.display = "flex";
    let together = document.querySelector('.togetherBlack');
    together.classList.add('show');
        let bgblack = document.querySelector(".panel");
    bgblack.style.backgroundColor="white";

        let startBgm = document.createElement("audio");
    startBgm.id = "startBgm";
    startBgm.src = "Assets/startBgm.mp3";
    startBgm.loop = true;
    startBgm.preload = "auto";
    startBgm.style.display = "none";
    document.body.appendChild(startBgm);
    startBgm.play();

}

let i4 = document.querySelector(".i4");
i4.addEventListener("click", imagine4)
function imagine4(){

    document.querySelector('.togetherWhite').style.display = "flex";
    let together = document.querySelector('.togetherWhite');
    together.classList.add('show');

}

let i6 = document.querySelector(".i6");
i6.addEventListener("click", imagine6)
function imagine6(){

    let hover = document.querySelector(".Chapter2img4");
    hover.classList.add('show');

}