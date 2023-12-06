const fs = require('fs')

let data = fs.readFileSync('daftar_siswa.json', {encoding: 'utf-8'})

let array_data = JSON.parse(data)

console.log(data)
console.log(array_data)

let siswa_baru = {
    nama: "Made Kopling",
    kelas: "9",
    jk: "Laki-Laki",
    hobi: ["main games"]
}

array_data.push(siswa_baru)

console.log(array_data)

let string_data_baru = JSON.stringify(array_data, null, 2)

fs.writeFileSync('daftar_siswa.json', string_data_baru, (err) => {})

