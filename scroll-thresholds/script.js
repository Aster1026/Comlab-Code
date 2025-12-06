function getScrollPercentage() { 
    let scrollTop= window.scrollY;
    let maxScroll= document.documentElement.scrollHeight - window.innerHeight;
    let percentage= (scrollTop/maxScroll)*100;
    return percentage;
}

window. addEventListener('scroll', function() {
    let percentage= getScrollPercentage();
    console.log(percentage);
    
    if (percentage >33){
      document.querySelector(".one p").style.transform="rotate(270deg)";
    } else {
        document.querySelector(".one p").style.transform="rotate(0deg)";
    }

    if (percentage>77){
        document.querySelector(".two p").style.transform="scale(2)";
    }else {
        document.querySelector(".two p").style.transform="rotate(270deg)";
    }

    let catAngle = (30000/100) * percentage;
    document.querySelector("#cat").style.transform="rotate(" + catAngle + "deg)";

});



