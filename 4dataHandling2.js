function dataHandling2(input) {

    // Manipulasi Biodata (Splice)
    input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung' )
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro')
    console.log(input)
    
    // Menentukan Bulan (Split Switch-case)
    var TTL = input[3].split('/') 
    var TTL2 = input[3].split('/') 
    var bulan // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
    bulan = Number(TTL[1])
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
    
    // Descending (Sort)
    var urut = TTL.sort(function(a, b){return b-a}) //o
    console.log(urut )

    // Join By (-)
    var joinTTL
    if (TTL2) {
        joinTTL = TTL2.join('-')
        console.log(joinTTL)
    }

    // Keep 15 character (Slice) 
    var name15 = input[1].slice(0, 15)
    console.log(name15)

    return ''

}
    
console.log(dataHandling2(["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]))
//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]