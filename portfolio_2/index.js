const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".navbar_div");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
});

var content = document.getElementsByTagName('body')[0];
var icon = document.getElementById("icon")
var sunicon = document.getElementById("sunicon")
icon.onclick = function(){
    content.classList.toggle('night');
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.src = "sun.png" 
    }else{
        icon.src = "moon.png"
    }
}