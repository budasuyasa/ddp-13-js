const fs = require('fs')

let ani = {
    nama: "Ani",
    kelas: "A",
    jk: "Perempuan",
    hobi: ["makan", "minum", "mancing"]
}

let agus = {
    nama: "Agus",
    kelas: "B",
    jk: "Laki-Laki",
    hobi: ["games", "baca", "jogging"]
}

let ana = {
    nama: "Ana",
    kelas: "B",
    jk: "Perempuan",
    hobi: ["bulu tangis", "sunmory", "jogging"]
}

function Siswa(nama, kelas, jk, hobi){
    this.nama = nama
    this.kelas = kelas
    this.jk = jk
    this.hobi = hobi
}

let tono = new Siswa("Tono", "9", "Laki-Laki", ["Membaca"])

// console.log(ani, agus, ana, tono)

let daftar_siswa = [
    ani,
    agus,
    ana
]

console.log(daftar_siswa)

let daftar_siswa_string = JSON.stringify(daftar_siswa, null, 2)

fs.writeFileSync('daftar_siswa.json', daftar_siswa_string, (err) => {})

