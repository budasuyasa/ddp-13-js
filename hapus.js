const fs = require('fs')
let prompt = require('prompt-sync')();

let daftar_siswa_string = fs.readFileSync('daftar_siswa.json', {encoding: 'utf-8'})

let array_data = JSON.parse(daftar_siswa_string)

console.log("Data Siswa")

for(let i = 0; i < array_data.length; i ++){
    console.log(i, array_data[i].nama)
}

let pilihan = prompt('Pilih data yang mau dihapus: ')


array_data.splice(parseInt(pilihan), 1)

let data_baru_string = JSON.stringify(array_data, null, 2)

fs.writeFileSync('daftar_siswa.json', data_baru_string, () => {})


