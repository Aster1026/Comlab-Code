let firstButton = document.querySelector("firstButton");

//changeInnerText(firstButton);

function clickButton(){
    
    let b = document.querySelector(".box");
    console.log(b);
   // colorize(b);

   // b.onclick = changeInnerText(b);

    // document.body.append(b);

    let bs = document.querySelectorAll(".box");
    console.log(bs);

    //for each elements call this function
    bs.forEach(colorize);
}

function colorize(elm){
    elm.style.backgroundColor = "red";
    
}