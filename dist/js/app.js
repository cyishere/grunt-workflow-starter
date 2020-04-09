"use strict";

var x = "Voyager!";

var hello = function hello() {
  console.log("Hello, ".concat(x, "!"));
};

hello();
document.getElementById("list").style.height = window.innerHeight - 200 + "px"; // console.log(window.innerHeight);
