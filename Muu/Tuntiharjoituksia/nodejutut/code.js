let h = document.querySelector("h1");

h.classList.add("colorful");
h.classList.add("testi");
h.classList.remove("colorful");

h.classList.toggle("colorful");

function changeStyle() {
    let h  = document.querySelector("h1");
    h.classList.toggle("colorful");
}

// Korvataan erikseen uuden elementin tekeminen, tai jos täytyy tehdä monta
// function qs(selector) {
    // return document.querySelector(selector);
// }
// function ce(name) {
    // return document.createElement(name);
// }

// let elem = qs("body");
// let elem = document.querySelector("body");

// let nimet = ["Reima", "Liisa", "Timo", "Merja"];

// for(const nimi of nimet) {
    // let n  = document.createElement("p");
    // let n = ce("p");
    // n.textContent = nimi;
    // }

// let p  = document.createElement("p");
// p.textContent = "Tässä uusi";

// elem.appendChild(p);

// p = document.createElement("p");
//bp.textContent = "Seuraava";

// elem.appendChild(p);