let container = document.querySelector("#container");

function appear(){
    console.log("Button is clicked");

    let headline = document.createElement("h5");
    headline.innerText = "Welcome to my page";

    //document.body.append(headline);

    container.append(headline);

    document.querySelector(".notWanted").remove();
}

function move(){
    container.classList.add("move");

    let r3 = Math.random();
    console.log(r3);
    let r2 = 10+ Math.random() * 10;
    console.log(r2);
    let r4 = Math.floor(r2);
    console.log(r4);

    document.querySelector(".notWanted").style.fontSize = r2 + "px";

}