var sidebar = document.getElementById("side");
var bar = document.getElementById("toggle-bar");
var cross = document.getElementById("cross-bar");


function Sidebar() {
    sidebar.style.display = "flex";
    // bar.style.display="none";
    bar.classList.add("change");
    cross.style.display = "flex";
}

function Cross() {
    sidebar.style.display = "none";
    // bar.style.display="flex";
    bar.classList.remove("change");
    cross.style.display = "none";
}