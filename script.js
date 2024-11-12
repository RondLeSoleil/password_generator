const passwordBox = document.getElementById("password");

const upperCase = "AZERTYUIOPQSDFGHJKLMWXCVBN";
const lowerCase = "azertyuiopqsdfghjklmwxcvbn";
const number = "0123456789";
const symbol = "&é#{[|`\\^@]}";

const allChars = upperCase + lowerCase + number + symbol; //est une chaîne de caractères qui combine toutes les catégories

function createPassword(n) {//génère un mot de passe de longueur n
    let password = "";//Initialise une chaîne vide qui stockera le mot de passe final.
    let randomCaractere = [];//Initialise un tableau vide qui, à chaque itération, contiendra un caractère aléatoire de chaque catégorie 

    for (let i = 0; i < n; i++) {//Cette boucle for répète l'opération n fois, où n est le nombre de caractères souhaité dans le mot de passe.
        randomCaractere = [//À chaque itération, le tableau randomCaractere est rempli avec un caractère aléatoire provenant de chacune des catégories 
            upperCase[Math.floor(Math.random() * upperCase.length)],//Math.random() * upperCase.length : Génère un nombre décimal aléatoire entre 0 et la longueur de upperCase.
            lowerCase[Math.floor(Math.random() * lowerCase.length)],//Math.floor(...) : Transforme ce nombre en un entier pour choisir un index valide dans upperCase.
            number[Math.floor(Math.random() * number.length)],
            symbol[Math.floor(Math.random() * symbol.length)]
        ];
        
        password += randomCaractere[Math.floor(Math.random() * 4)];//génère un nombre décimal aléatoire entre 0 (inclus) et 1 (exclus).
        //En le multipliant par 4, on obtient un nombre décimal compris entre 0 et 4 (exclus)
        //Math.floor() arrondit ce nombre vers le bas pour obtenir un entier, soit 0, 1, 2, ou 3.
        //
    }

    passwordBox.value = password;
    return password;
}


