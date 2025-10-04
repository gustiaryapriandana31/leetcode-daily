// Link Soal :
// https://leetcode.com/problems/excel-sheet-column-number/description/

/**
 * @param {string} columnTitle
 * @return {number}
 */
let titleToNumber = function(columnTitle) {

    const alphabet = {
        "A" : 1,
        "B" : 2,
        "C" : 3,
        "D" : 4,
        "E" : 5,
        "F" : 6,
        "G" : 7,
        "H" : 8,
        "I" : 9,
        "J" : 10,
        "K" : 11,
        "L" : 12,
        "M" : 13,
        "N" : 14,
        "O" : 15,
        "P" : 16,
        "Q" : 17,
        "R" : 18,
        "S" : 19,
        "T" : 20,
        "U" : 21,
        "V" : 22,
        "W" : 23,
        "X" : 24,
        "Y" : 25,
        "Z" : 26,
    }

    let nilai = 0
    if(columnTitle.length == 1) return alphabet[columnTitle[i]] 
    for(let i = 0; i < columnTitle.length; i++) {
        let pangkat = columnTitle.length - (i + 1)
        nilai += (alphabet[columnTitle[i]]) * (26)**(pangkat); 
    }

    return nilai;
};

console.log(titleToNumber("AA")) // 27
console.log(titleToNumber("AB")) // 28
console.log(titleToNumber("AN")) // 40
console.log(titleToNumber("AO")) // 41
console.log(titleToNumber("AZ")) // 52

console.log(titleToNumber("BA")) // 53
console.log(titleToNumber("BB")) // 54
console.log(titleToNumber("BN")) // 66
console.log(titleToNumber("BZ")) // 78

console.log(titleToNumber("ZY")) // 36
console.log(titleToNumber("ZZ")) // 36
console.log(titleToNumber("ZY")) // 701
console.log(titleToNumber("FXSHRXW")) // 2147483647
