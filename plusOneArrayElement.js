/**
* @param {number[]} digits
* @return {number[]}
*/
let plusOne = function(digits) {
    let newArr = [];
    let simpan = 0;
    let sudahMasuk = false;

    for(let i = digits.length-1; i >= 0; i--) { // 1,2,9 => 1,3,0
        if(digits[i] != 9 && !sudahMasuk) { // false
            newArr.unshift(digits[i] + 1);
            sudahMasuk = true;
            simpan = 0;
        } else if(digits[i] == 9 && !sudahMasuk) { 
            digits[i] += simpan; 
            digits[i] -= digits[i]; 
            simpan += 1;
            newArr.unshift(digits[i]); // newArr = [0]
        } else {
            newArr.unshift(digits[i]); // newArr = [0]
            simpan = 0;
        }

        if(i == 0 && simpan >= 1) {
            newArr.unshift(1);
        }
    }

    return newArr;
};


console.log(plusOne([1,2,9])) 
console.log(plusOne([1,2,4])) 
console.log(plusOne([9])) 
console.log(plusOne([3,4,9])) 
console.log(plusOne([1,9])) 
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])) 
console.log(plusOne([9,9,9,9])) 