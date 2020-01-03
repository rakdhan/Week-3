function dataHandling2(input) {

    ////////////MANIPULASI BIODATA (SPLICE)/////////////////
    // for (let i = 0; i < input.length; i++) {console.log(input[i])}
    input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provnsi Bandar Lampung' )
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro')
    console.log(input)
    
    ////////////MENENTUKAN BULAN (SPLIT SWITCH CASE)//////////
    const ambilTTL = input[3].split('/') 
    const ambilTTL2 = input[3].split('/') 
    // console.log(ambilTTL) //[ '21', '05', '1989' ]
    var bulan // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
    bulan = Number(ambilTTL[1])
    if (bulan <= 12 && bulan >=1){
        switch(bulan) {
            case 1:   { console.log('Januari '); break; }
            case 2:   { console.log('Februari '); break; }
            case 3:   { console.log('Maret '); break; }
            case 4:   { console.log('April '); break; }
            case 5:   { console.log('Mei '); break; }
            case 6:   { console.log('Juni '); break; }
            case 7:   { console.log('Juli '); break; }
            case 8:   { console.log('Agustus '); break; }
            case 9:   { console.log('September '); break; }
            case 10:   { console.log('Oktober '); break; }
            case 11:   { console.log('November '); break; }
            case 12:   { console.log('Desember '); break; }
    
            default: { break;}
        }
    }
    else{
        console.log('Cakupan Bulan hanya dari 1 - 12');
    }
    

    /////////////// DESCENDING (SORT) //////////////
    var urutTTL = ambilTTL.sort(function(a, b){return b-a}) //o
    console.log(urutTTL )
  

    ///////////////// JOIN BY (-) //////////////////
    var joinTTL
    if (ambilTTL2) {
        joinTTL = ambilTTL2.join('-')
        console.log(joinTTL)
    }

    ///////////// KEEP 15 CHARACTER (SLICE) ////////////
    var nama15 = input[1].slice(0, 15)
    console.log(nama15)
    
    return ''
}
    
console.log(dataHandling2(["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]))
//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]