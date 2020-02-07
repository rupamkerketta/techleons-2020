// FullPageScroll
window.onclick = function () { pageFunction(id) }
function pageFunction(id) {
    var top = document.getElementById(id);
    top.style.display = "block";
}
//ActiveMenu
var links = document.getElementsByClassName('nav-a');
for(var i=0; i<links.length; i++){
    links[i].addEventListener("click", function(){
        var active = document.getElementsByClassName('active-nav');
        active[0].className = active[0].className.replace(" active-nav", "");
        this.className += " active-nav";
    });
}