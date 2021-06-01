const nombreInput = document.querySelector("input");
const formulaire = document.querySelector("form");
const indice = document.querySelector("#indice");

let justePrix = 0;
let tentatives = 0;

/**
 * Remise à zéro du juste prix
 */
function reset() {
    tentative = 0;
    justePrix = Math.floor(Math.random() * 500);
}

/**
 * Vérifie si l'uitilisateur a trouvé le juste prix
 */
function deviner(event){
    event.preventDefault();
    console.log(nombreInput.value);
    console.log(nombreInput.value == justePrix);
}

formulaire.addEventListener("submit", deviner);