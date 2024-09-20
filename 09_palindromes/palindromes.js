const palindromes = function (word) {
    let wordAlpha = removeNonAlphaChars(word);

    let reversedWord = reverseString(wordAlpha);
    return wordAlpha === reversedWord ? true : false;
};

function isAlphaNum(char) {
    const pattern = /^[A-Z0-9]{1}$/i;
    return pattern.test(char);
}

function reverseString(word) {
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed;
}

function removeNonAlphaChars(word) {
    return word
    .split('')
    .filter(char => {
        return isAlphaNum(char) ? true : false;
    })
    .join('')
    .toLowerCase();
}

palindromes("ZZZZ car, a man, a maracaz.");

// Do not edit below this line
module.exports = palindromes;
