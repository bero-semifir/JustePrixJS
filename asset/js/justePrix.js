const nombreInput = document.querySelector("input");
const formulaire = document.querySelector("form");
const indice = document.querySelector("#indice");

let justePrix = 0;
let tentatives = 0;

/**
 * Remise à zéro du juste prix
 */
function reset() {
    console.log("(ré)initialisation du Juste Prix");
    tentatives = 0;
    justePrix = Math.floor(Math.random() * 500);
}

/**
 * Vérifie si l'uitilisateur a trouvé le juste prix
 */
function deviner(event){
    event.preventDefault();
    let nbUtilisateur = nombreInput.value;
    tentatives++;
    // comparaison du juste prix avec celui indiqué par l'utilisateur
    if(tentatives < 10){

        if(nbUtilisateur == justePrix){
            // changement de l'indice
            indice.innerText = "Vous avez trouver le juste prix !";
            reset();
        }else{
            if(nbUtilisateur > justePrix){
                // changement de l'indice
                indice.innerText = `C'est moins ! il reste : ${10 - tentatives} essais`;
            }else{
                // changement de l'indice
                indice.innerText = `C'est plus ! il reste : ${10 - tentatives} essais`;
            }
        }
    }else{
        indice.innerText = "Vous avez perdu. Le juste prix était : " + justePrix;
        reset();
    }
}

formulaire.addEventListener("submit", deviner);
// écouter l'événement "load" (chargement) avant de lancer la fonction reset
window.addEventListener('load',reset);