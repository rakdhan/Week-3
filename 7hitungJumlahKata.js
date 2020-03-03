function hitungJumlahKata(kalimat) {
    var hitungSpace = 0
    var jumKata = 0
    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] === ' ') {
            hitungSpace++
        }
    }
    jumKata = hitungSpace + 1
    return jumKata
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5