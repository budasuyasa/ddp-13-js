const fs = require('fs')

let statistics = {
    waktu_mulai: 1321321232,
    waktu_selesai: 32312312321,
    soal_benar: 4,
    soal_salah: 0,
    waktu_jawab: [4,5,5,9]
}

let data_file = JSON.stringify(statistics, null, 2)

let nama_file = 'data.json'

fs.writeFileSync(nama_file, data_file, (err)=>{
    if(err){
        console.log(err)
    }
    console.log('Selesai')
})

