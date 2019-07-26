//Menu
const burger = document.querySelector(".burger-container");
const menu = document.querySelector(".menu");
const scaler = document.querySelector(".scaler");
const listContainer = document.querySelector(".list-container");
const menuWrap = document.getElementById("menu-wrap");
let showMenu = false;

burger.addEventListener("click", menuShow);

function menuShow() {
  if (!showMenu) {
    menuWrap.classList.add("close");
    menu.classList.add("visible");
    scaler.classList.add("enlarge");
    listContainer.classList.add("fade");
    showMenu = true;
  } else {
    menuWrap.classList.remove("close");
    menu.classList.remove("visible");
    scaler.classList.remove("enlarge");
    listContainer.classList.remove("fade");
    showMenu = false;
  }
}
