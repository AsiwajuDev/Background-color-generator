let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let color3 = document.querySelector(".color3");
let body = document.getElementById("body");
let button = document.getElementById("button");

// var button = document.getElementById("button");

//set color value for each color input
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " +
    color1.value +
    ", " +
    color2.value +
    ", " +
    color3.value +
    ")";

  css.textContent = body.style.background + ";";
}

// button.onclick("button", setGradient);

//event triger
// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);
