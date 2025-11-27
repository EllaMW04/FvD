const menu = document.getElementById("menu");
const nav = document.querySelector("nav");

const openBtn = document.getElementById("MenuOpenen");
const closeBtn = document.getElementById("MenuSluiten");

// Menu openen
openBtn.addEventListener("click", () => {
   menu.hidden = false;
   nav.classList.add("open")
   })

    

// Menu sluiten
closeBtn.addEventListener("click", () => {
   menu.hidden = true;
   nav.classList.remove("open")
   })

