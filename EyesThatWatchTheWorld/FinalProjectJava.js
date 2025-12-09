let Intro = document.querySelector("#introQuote");
let storyReady = false;



const thisPageURL = new URL(window.location.toLocaleString());
// console.log(thisPageURL.searchParams.get("returned"))
let returnedFromFirstChapter = thisPageURL.searchParams.get("returned")
if(returnedFromFirstChapter == 1){
startProject()
intoStory()

}

Intro.addEventListener("click", startProject);
function startProject(){
    let bg = document.createElement("div");
    bg.className = "bgFull";
    let introImage = document.createElement("img");
    introImage.src = "Assets/background.jpg";
    bg.appendChild(introImage);
    document.body.appendChild(bg);
    
    introImage.onload = function(){
        bg.style.opacity = "1"
    }
    Intro.remove();

    let Florence1 = document.createElement("img");
    Florence1.src = "Assets/Florence1.png";
    Florence1.className = "introImage leftImage";
    document.body.append(Florence1);
    let Athan1 = document.createElement("img");
    Athan1.src = "Assets/Athan1.png";
    Athan1.className = "introImage rightImage";
    document.body.append(Athan1);

    let center = document.createElement("div");
    center.className = "center";
    let title = document.createElement("div");
    title.className = "title";
    title.innerText = "-Eyes That Watch The World-"
    let start = document.createElement("p");
    start.className = "start";
    start.innerText = "START";
    center.appendChild(title);
    center.appendChild(start);
    document.body.appendChild(center);

    let startBgm = document.createElement("audio");
    startBgm.id = "startBgm";
    startBgm.src = "Assets/startBgm.mp3";
    startBgm.loop = true;
    startBgm.preload = "auto";
    startBgm.style.display = "none";
    document.body.appendChild(startBgm);
    startBgm.play();

    showYears();

    start.addEventListener("click", intoStory);
}

function showYears() {
  let years = document.querySelectorAll('.year');

  let pool = document.querySelector('.yearPool');
  if (!pool) {
    pool = document.createElement('div');
    pool.className = 'yearPool';
    document.body.appendChild(pool);
  }
 
  function setRandomPosition(el) {
    let left = Math.random() * 100; 
    let top  = Math.random() * 100; 
    el.style.left = left + '%';
    el.style.top  = top + '%';
  }

  years.forEach(function(el) {
    el.style.position = 'fixed';

    setRandomPosition(el);
    pool.appendChild(el);

    el.setYear = function(){setRandomPosition(el); }
    el.addEventListener('animationiteration', el.setYear);
  });
}

function intoStory(){

    document.querySelector('.marker').style.display = "flex";
    document.querySelector('.marker2').style.display = "flex";
    document.querySelector('.marker3').style.display = "flex";
    document.querySelector('.marker4').style.display = "flex";
    document.querySelector('.marker5').style.display = "flex";


    let bg = document.querySelector('.bgFull');
    bg.innerHTML = '';
    let bg2 = document.createElement('img');
    bg2.src = 'Assets/background2.jpg';
    bg2.style.width = '100%';
    bg2.style.height = '100%';
    bg2.style.objectFit = 'cover';
    bg.appendChild(bg2);

    let years = document.querySelectorAll('.year');
    years.forEach(function(el){
    el.remove();
    });
  
    let center = document.querySelector('.center');
    center.classList.add('fade-out');
    center.addEventListener('transitionend', function onCenterFade(){
    center.removeEventListener('transitionend', onCenterFade);
    });

    let leftImg = document.querySelector('.leftImage');
    let rightImg = document.querySelector('.rightImage');

    leftImg.classList.add('exitleft');
    leftImg.addEventListener('transitionend', function LeftEnd(){  
    leftImg.removeEventListener('transitionend', LeftEnd);
    });
    rightImg.classList.add('exitright');
    rightImg.addEventListener('transitionend', function RightEnd(){
    rightImg.removeEventListener('transitionend', RightEnd);
    });

    document.querySelector('.timeBanner')?.classList.add('show');
    document.querySelector('.instruction')?.classList.add('show');
    document.querySelector('.marker')?.classList.add('show');
    document.querySelector('.scrollContent')?.classList.add('show');

    storyReady = true;
}

function getScrollPercentage() { 
    let scrollTop= window.scrollY;
    let maxScroll= document.documentElement.scrollHeight - window.innerHeight;
    let percentage= (scrollTop/maxScroll)*100;
    return percentage;
}

window.addEventListener('scroll', function() {
  if (!storyReady) return;
  let percentage = getScrollPercentage();
  console.log(percentage);

  let m1 = document.querySelector('.marker');
  let m2 = document.querySelector('.marker2');
  let m3 = document.querySelector('.marker3');
  let m4 = document.querySelector('.marker4');
  let m5 = document.querySelector('.marker5');
  let t1 = document.querySelector('.timeBanner');
  let t2 = document.querySelector('.timeBanner2');
  let t3 = document.querySelector('.timeBanner3');
  let t4 = document.querySelector('.timeBanner4');
  let t5 = document.querySelector('.timeBanner5');

  if (percentage > 0 && percentage < 20) {
    m1.classList.add('show'); m1.classList.remove('hide');
    m2.classList.remove('show'); m2.classList.add('hide');
    m3.classList.remove('show'); m3.classList.add('hide');
    m4.classList.remove('show'); m4.classList.add('hide');
    m5.classList.remove('show'); m5.classList.add('hide');
    t1.classList.add('show'); t1.classList.remove('hide');
    t2.classList.remove('show'); t2.classList.add('hide');
    t3.classList.remove('show'); t3.classList.add('hide');
    t4.classList.remove('show'); t4.classList.add('hide');
    t5.classList.remove('show'); t5.classList.add('hide');
    return;
  }

  if (percentage >= 20 && percentage < 40) {
    m1.classList.remove('show'); m1.classList.add('hide');
    m2.classList.add('show'); m2.classList.remove('hide');
    m3.classList.remove('show'); m3.classList.add('hide');
    m4.classList.remove('show'); m4.classList.add('hide');
    m5.classList.remove('show'); m5.classList.add('hide');
    t1.classList.remove('show'); t1.classList.add('hide');
    t2.classList.add('show'); t2.classList.remove('hide');
    t3.classList.remove('show'); t3.classList.add('hide');
    t4.classList.remove('show'); t4.classList.add('hide');
    t5.classList.remove('show'); t5.classList.add('hide');
    return;
  }

  if (percentage >= 40 && percentage < 60) {
    m1.classList.remove('show'); m1.classList.add('hide');
    m2.classList.remove('show'); m2.classList.add('hide');
    m3.classList.add('show'); m3.classList.remove('hide');
    m4.classList.remove('show'); m4.classList.add('hide');
    m5.classList.remove('show'); m5.classList.add('hide');
    t1.classList.remove('show'); t1.classList.add('hide');
    t2.classList.remove('show'); t2.classList.add('hide');
    t3.classList.add('show'); t3.classList.remove('hide');
    t4.classList.remove('show'); t4.classList.add('hide');
    t5.classList.remove('show'); t5.classList.add('hide');
    return;
  }

  if (percentage >= 60 && percentage < 80) {
    m1.classList.remove('show'); m1.classList.add('hide');
    m2.classList.remove('show'); m2.classList.add('hide');
    m3.classList.remove('show'); m3.classList.add('hide');
    m4.classList.add('show'); m4.classList.remove('hide');
    m5.classList.remove('show'); m5.classList.add('hide');
    t1.classList.remove('show'); t1.classList.add('hide');
    t2.classList.remove('show'); t2.classList.add('hide');
    t3.classList.remove('show'); t3.classList.add('hide');
    t4.classList.add('show'); t4.classList.remove('hide');
    t5.classList.remove('show'); t5.classList.add('hide');
    return;
  }

  if (percentage >= 80 && percentage < 101) {
    m1.classList.remove('show'); m1.classList.add('hide');
    m2.classList.remove('show'); m2.classList.add('hide');
    m3.classList.remove('show'); m3.classList.add('hide');
    m4.classList.remove('show'); m4.classList.add('hide');
    m5.classList.add('show'); m5.classList.remove('hide');
    t1.classList.remove('show'); t1.classList.add('hide');
    t2.classList.remove('show'); t2.classList.add('hide');
    t3.classList.remove('show'); t3.classList.add('hide');
    t4.classList.remove('show'); t4.classList.add('hide');
    t5.classList.add('show'); t5.classList.remove('hide');
    return;
  }
});

