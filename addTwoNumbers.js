// Link Soal :
// https://leetcode.com/problems/add-two-numbers/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
    let nilaiDasar = new ListNode(0);
    let nilaiSekarang = nilaiDasar;
    let nilaiSimpan = 0;

    // Selama masih ada node l1 atau l2
    while (l1 !== null || l2 !== null) {
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2.val : 0;

        const nilaiJumlah = x + y + nilaiSimpan;
        nilaiSimpan = Math.floor(nilaiJumlah / 10);
        const digit = nilaiJumlah % 10;

        nilaiSekarang.next = new ListNode(digit);
        nilaiSekarang = nilaiSekarang.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    // Jika setelah loop masih ada carry
    if (nilaiSimpan > 0) {
        nilaiSekarang.next = new ListNode(nilaiSimpan);
    }

    return nilaiDasar.next;
};

console.log(addTwoNumbers([2,4,3], [5,6,4])) // [7,0,8]
console.log(addTwoNumbers([0], [0])) // [0]
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])) // [8,9,9,9,0,0,0,1]