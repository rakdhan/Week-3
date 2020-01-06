function targetTerdekat(arr) {
    // you can only write your code here!
    let letakO = 0
    let letakX = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            letakO = i
            // console.log(letakO)
        }
        else if (arr[i] === 'x') {
            letakX.push(i)
        }     
    } 
    // console.log(letakX)
    // console.log(letakO)
    if (letakO < letakX[0] ) {
        return letakX[0] - letakO 
    }
    else if (letakO > letakX[0]) {
        return letakO - letakX[letakX.length-1]
        
    }
    else if (letakX.length === 0) {
        return 0
        
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2