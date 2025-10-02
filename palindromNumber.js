/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if(x >= 0) {
        if(x == reverseInteger(x)) {
            return true
        }
    }
    return false
};

let reverseInteger = (num) => {
    let hasil = [];

    while (num >= 10) {
        hasil.push(num % 10);
        let sisa = 0;
        sisa += Math.floor(num / 10);
        num = sisa;
    }

    hasil.push(num);
    return hasil.join("")
}

console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(10)) // false
console.log(isPalindrome(12321)) // true
console.log(isPalindrome(0)) // true
console.log(isPalindrome(18977981)) // true