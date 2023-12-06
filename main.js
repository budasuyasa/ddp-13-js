let prompt = require('prompt-sync')();

let waktu_mulai_1 = new Date().getTime() ;
console.log(waktu_mulai_1 / 1000)

let jawaban_1 = prompt("Apa nama ibukota Bali?: ")
let waktu_selesai_1 = new Date().getTime();

let waktu_jawab = waktu_selesai_1 - waktu_mulai_1

let jawaban_2 = prompt("Apa nama ibukota Jawa timur: ")

console.log(waktu_mulai_1)
console.log(waktu_selesai_1)
console.log(waktu_jawab / 1000)