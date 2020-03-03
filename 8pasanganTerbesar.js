function pasanganTerbesar(num) {
    // you can only write your code here!
   var ubah = num.toString()
   var numArr = []
   var ambilDua 
    for (let i = 0; i < ubah.length-1; i++) {
        ambilDua = ubah[i] + ubah[i+1]
        numArr.push(ambilDua) 
    }
    
    //sort baik dilakukan pd array
    for (let i = 0; i < numArr.length; i++) {
        for (let j = i+1; j < numArr.length; j++) {
            if (numArr[i] < numArr[j]) {
                let temp = numArr[i]
                numArr[i] = numArr[j]
                numArr[j] = temp
            }
        }
    }
    return numArr[0]
}

  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99





 
        
