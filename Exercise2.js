function balikString(str) {
    let hasil = ''
    for (let i = str.length-1; i >= 0; i--) {
    // for (i >= 0; i = str.length-1; i--) { // won't reverse
    // for (i = 0; i < str.length; i++) { // classic order
        // console.log(str[i])
        hasil += str[i]
    }
    return hasil
}

console.log(balikString('Hello World!'))
console.log(balikString(['Hello',  'World!']))
console.log(balikString('lon esaf sulul nigni tagnas ayaS'))
console.log(balikString(['nol', 'fase ', 'lulus ', 'siswa ', 'calon ', 'Raka ']))