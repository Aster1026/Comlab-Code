let myButton= document. querySelector ("#myButton");
let myInput = document.querySelector ("#myInput");
let myOutput = document.querySelector ("#myOutput");

function buttonClicked(eventInfo){
    document.body.style.backgroundColor="bisque";
    eventInfo.target.remove()
}
myButton.addEventListener ("click", buttonClicked);


function inputChanged(eventInfo){
    console.log(eventInfo.target.value);
    console.log("input changed");
    myOutput.innerText = eventInfo.target.value;
}
//                        change
myInput.addEventListener ("input", inputChanged);

