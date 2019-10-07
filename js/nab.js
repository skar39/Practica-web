const showMenu = e => {
  let menu = document.getElementById("disp-none");
  menu.style.display = "block";
  menu.style.zIndex = "1";
  eventMenu.removeEventListener("click", showMenu);
  eventMenu.addEventListener("click", hideMenu);
};
const hideMenu = e => {
  let menu = document.getElementById("disp-none");
  menu.style.display = "none";
  menu.style.zIndex = "-100";
  eventMenu.removeEventListener("click", hideMenu);
  eventMenu.addEventListener("click", showMenu);
};
let eventMenu = document.getElementById("switcher");
eventMenu.addEventListener("click", showMenu);
