let nameBox = document.querySelector("#nameInput");
let result = document.querySelector("#result");

function checkName() {
  let name = nameBox.value;
  if (name == "Athan") {
    result.style.color = "white";
    result.innerHTML = '<a href="Ending.html">...Thank you</a>';
  } else {
    result.innerText = "You DO remember him. Think about it again.";
  }
}

nameBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkName();
  }
});

