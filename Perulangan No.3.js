function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword () {
    var passLength = prompt("Masukan Password \nantara 8 - 128 karakter.");
    
    var lengthConfirm = parseInt(passLength);
    console.log(lengthConfirm);

    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        alert ("Error tidak boleh kurang dari 8 karakter.");
        return;
    }

var collectionOfValids = [];
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var lowerCaseChar = "abcdefghiklmnopqrsttuvwxtz" .split("");
var numberChar = "0123456789" .split ("");
var specialChar = "*&^%$#@!?><{}" .split("");

var lowerCaseConfirm = confirm("apakah ingin menggunakan huruf kecil?");
    if(lowerCaseConfirm === true) {
        for (var i = 0; i < lowerCaseChar.length; i++) {
            collectionOfValids.push(lowerCaseChar[i]);
        }
    }

var upperCaseConfirm = confirm("apakah ingin menggunakan huruf besar?");
    if (upperCaseConfirm === true) {
        for (var i = 0; i < upperCaseChar.length; i++) {
            collectionOfValids.push(upperCaseChar[i]);
        }
    }

var numberConfirm = confirm("apakah ingin menggunakan password?");
    if (numberConfirm === true) {
        for (var i = 0; i < numberChar.length; i++) {
            collectionOfValids.push(numberChar[i]);
        }
    }

var specialConfirm = confirm("apakah ingin menggukan simbol?");
    if (specialConfirm === true) {
        for (var i = 0; i < specialChar.length; i++) {
            collectionOfValids.push(specialChar[i]);
        }
    }

 var randomPassword = "";
 for (var i = 0; i < lengthConfirm; i++) {
     collectionOfValids[
         Math.floor(Math.random() * collectionOfValids.length)];
     randomPassword +=
        collectionOfValids[
            Math.floor(Math.random() * collectionOfValids.length)
        ];
    }
 return randomPassword;
}

generateBtn.addEventListener("click", writePassword);