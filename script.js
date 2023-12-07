AOS.init();
var menuBtn = document.getElementById("menuBtn");
var navBar = document.getElementById("navBar");
var menu = document.getElementById("menu");

navBar.style.right = "-250px";
menuBtn.onclick = function(){
  if(navBar.style.right == "-250px"){
    navBar.style.right = "0"
    menu.src = "close.png"
  }
  else{
    navBar.style.right = "-250px";
    menu.src = "logo.png"
  }
}
