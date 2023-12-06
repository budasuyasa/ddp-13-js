let prompt = require('prompt-sync')();
let fs = require('fs')

// Meminta user memasukan data siswa
let nama = prompt('Nama siswa: ')
let kelas = prompt('Kelas siswa: ')
let jk = prompt('Jenis kelamin siswa: ')
let hobi = prompt('Hobi siswa: ')

// membaca data saat ini dari file
let daftar_siswa_string = fs.readFileSync('daftar_siswa.json', {encoding: 'utf-8'}, () => {})

// mengkonversi string dari isi file ke array
let array_daftar_siswa = JSON.parse(daftar_siswa_string)

// menambahkan array baru 
array_daftar_siswa.push({
    nama: nama,
    kelas: kelas,
    jk: jk,
    hobi: hobi
})

// mengkonversi array ke string kembali
let string_data_baru = JSON.stringify(array_daftar_siswa, null, 2)

// menulis file dengan data baru
fs.writeFileSync('daftar_siswa.json', string_data_baru, (err) => {})

