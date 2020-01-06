function pasanganTerbesar(num) {
    // you can only write your code here!
    ubah = num.toString()
    // console.log(ubah)
    let toArray = []
    // let result = 0
    for (let i = 0; i < ubah.length-1; i++) {
     
        let puluhan = Number(ubah[i] + ubah[i+1])
        toArray.push(puluhan)
    }
    // console.log(toArray)
    // toArray.sort()
    
    // ======= SORT ARRAY DENGAN LOOPING =========
    for (let i = 0; i < toArray.length; i++) {
        for (let j = 0; j < toArray.length; j++) {
            
           if (toArray[i] > toArray[j]) {
                let temp = toArray[i]
                toArray[i] = toArray [j]
                toArray[j] = temp  
           }  
        }
    }
    // console.log(toArray)
    return toArray[0]
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99