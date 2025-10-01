/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function(numRows) {
    let arrHasil = []
    for (let i = 0; i < numRows; i++) {
        let arrDalam = []
        for (j = 0; j <= i; j++) { 
            arrDalam.push((j == 0 || j == i) ? 1 :arrHasil[i-1][j-1] + arrHasil[i-1][j] ) 
        }
        arrHasil.push(arrDalam)
    }
    return arrHasil
};
console.log(generate(5)) // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]