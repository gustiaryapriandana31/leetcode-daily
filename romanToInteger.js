/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function(s) {
    const romanConversion = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    }

    let hasilInteger = 0;

    for (let i = 0; i < s.length; i++) {
        let nilaiSekarang = romanConversion[s[i]]
        let nilaiSelanjutnya = romanConversion[s[i+1]]
        if (nilaiSekarang < nilaiSelanjutnya) {
            hasilInteger -= nilaiSekarang; 
        } else {
            hasilInteger += nilaiSekarang;
        }
    }
    return hasilInteger;
};

console.log(romanToInt("MCMXCIV")) // 1994
console.log(romanToInt("LVIII")) // 58
console.log(romanToInt("III")) // 3