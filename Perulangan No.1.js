No1

function palindrome(str) {

    let pali = str.length;
    let mid = Math.floor(pali/2);

    for ( let i = 0; i < mid; i++ ) {
        if (str[i] !== str[pali - 1 - i]) {
            return false;
        }
    }

    return true;
}

let hasil = palindrome("kamar")
console.log(hasil);