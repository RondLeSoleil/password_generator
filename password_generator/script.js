const passwordBox = document.getElementById("password");

const upperCase = "AZERTYUIOPQSDFGHJKLMWXCVBN";
const lowerCase = "azertyuiopqsdfghjklmwxcvbn";
const number = "0123456789";
const symbol = "&é#{[|`\\^@]}";

const allChars = upperCase + lowerCase + number + symbol;
function createPassword(n) {
    let password = "";
    let randomCaractere = [];

    for (let i = 0; i < n; i++) {
        randomCaractere = [
            upperCase[Math.floor(Math.random() * upperCase.length)],
            lowerCase[Math.floor(Math.random() * lowerCase.length)],
            number[Math.floor(Math.random() * number.length)],
            symbol[Math.floor(Math.random() * symbol.length)]
        ];
        
        password += randomCaractere[Math.floor(Math.random() * 4)];
    }

    passwordBox.value = password;
    return password;
}


