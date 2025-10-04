// Link Soal :
// https://leetcode.com/problems/plus-one/description/

/**
* @param {number[]} digits
* @return {number[]}
*/
// versi gua
let plusOne = function(digits) {
    let newArr = [];
    let simpan = 0;
    let sudahMasuk = false;

    for(let i = digits.length-1; i >= 0; i--) { 
        if(digits[i] != 9 && !sudahMasuk) { 
            newArr.unshift(digits[i] + 1);
            sudahMasuk = true;
            simpan = 0;
        } else if(digits[i] == 9 && !sudahMasuk) { 
            digits[i] += simpan; 
            digits[i] -= digits[i]; 
            simpan += 1;
            newArr.unshift(digits[i]);
        } else {
            newArr.unshift(digits[i]); 
            simpan = 0;
        }

        if(i == 0 && simpan >= 1) {
            newArr.unshift(1);
        }
    }

    return newArr;
};

// versi yang lebih pendek dan efisien
// let plusOne = function(digits) {
//     for (let i = digits.length - 1; i >= 0; i--) {
//         if (digits[i] < 9) {
//             digits[i]++;
//             return digits; // selesai langsung return
//         }
//         digits[i] = 0; // kalau 9, jadi 0 dan lanjut carry
//     }
//     // kalau semua digit 9
//     digits.unshift(1);
//     return digits;
// };

// console.log(plusOne([1,2,9])) 
// console.log(plusOne([1,2,4])) 
// console.log(plusOne([9])) 
// console.log(plusOne([3,4,9])) 
// console.log(plusOne([1,9])) 
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])) 
// console.log(plusOne([9,9,9,9])) 
