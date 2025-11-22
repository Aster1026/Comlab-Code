let Intro = document.querySelector("#introQuote");


Intro.addEventListener("click", startProject);
function startProject(){
    document.body.style.backgroundColor="rgb(227, 216, 200)";
    Intro.remove();

    let introImage = document.createElement("img");
    introImage.src = "";
    introImage.className = "introImage"
    document.body.append(introImage);
}