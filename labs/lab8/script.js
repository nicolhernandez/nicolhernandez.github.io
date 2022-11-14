function toggleTheme(){
    let el=document.querySelector("body");
    el.classList.toggle("dark-mode");
}

let toggleb= document.getElementById("toggleButton");
toggleb.onclick = toggleTheme;