const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");

let isOpen = true;
menuIcon.addEventListener("click", function () {
  if (isOpen == true) {
    menu.classList.toggle("hidden");
  } else {
    menu.classList.toggle("hidden");
    isOpen == true;
  }
});

var img = document.getElementById("img");
var anh = ["image_5.png", "slide1.png", "slide2.png"];
var allimg = "images/";
var len = anh.length;
var index = 0;
function next() {
  if (index == len - 1) {
    index = 0;
    img.src = allimg + anh[index];
  } else {
    index++;
    img.src = allimg + anh[index];
  }
}
var t = null;
var flag = 0;
function playslide() {
  if (flag == 0) {
    t = setInterval(function () {
      next();
    }, 1000);
    flag = 1;
  }
}
playslide();
