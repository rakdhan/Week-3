function balikString(str) {
    var result = ''
    for (let i = str.length-1; i >=0; i--) {
        result += str[i]        
    }
    return result
}

console.log(balikString('Hello World!'))//!dlroW olleH
console.log(balikString('Saya sangat ingin lulus fase nol'))//!dlroW olleH
console.log(balikString(['nol', 'fase ', 'lulus ', 'siswa ', 'calon ', 'Raka ']))
//Raka calon siswa lulus fase nol