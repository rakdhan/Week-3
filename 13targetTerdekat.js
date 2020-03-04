function targetTerdekat(arr) {
    // you can only write your code here!
   var posO = 0
   var posX = []
   // assign o dan x menjadi index ke-i
   for (let i = 0; i < arr.length; i++) {
       if (arr[i] === 'o') {
           posO = i
       }
       else if (arr[i] === 'x') {
           posX.push(i)
       }
    }
    //buat kondisi selisih
    if (posX.length === 0) {
        return 0
    }
    if (posO < posX[0]) {
        return posX[0] - posO
    }
    else if (posO > posX[0]) {
        return posO - posX[posX.length-1]
    }
    
    
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2








