var menuOpen = false;


function openMenu() {
    document.getElementById("sMMButton").classList.add("open", "current-item");
    document.getElementById("sMMButton").innerHTML = "<span>/</span>Close";
    document.getElementsByClassName("sMM")[0].classList.add("open");
    document.getElementsByClassName("sMM")[1].classList.add("open");
    menuOpen = true;
}
function closeMenu() {
    document.getElementById("sMMButton").classList.remove("open", "current-item");
    document.getElementById("sMMButton").innerHTML = "<span></span>Menu";
    document.getElementsByClassName("sMM")[0].classList.remove("open");
    document.getElementsByClassName("sMM")[1].classList.remove("open");
    menuOpen = false;
}
function toggleMenu() {
    if (menuOpen)
        closeMenu();
    else
        openMenu();
}

function setHoveredMediaText(text){
    //document.getElementById("hoveredSocialMedia").innerText = text;
}

function checkRelevantMenuItem(pagename) {
    buttonID = pagename + "Button";
    if (document.getElementById(buttonID))
        document.getElementById(buttonID).classList.add("current-item");
}