function mengelompokkanAngka(arr) {
    // you can only write your code here!
    let angGenap = []
    let angGanjil = []
    let kelipatan3 = []
    let hasil = []
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        if (arr[i] % 2 === 0 && arr[i] % 3 !== 0) {
            angGenap.push(arr[i])
        }
        else if (arr[i] % 3 === 0) {
            kelipatan3.push(arr[i])
        }
        else if (arr[i] % 2 !== 0) {
            angGanjil.push(arr[i])
        }
    }
    hasil.push(angGenap, angGanjil, kelipatan3)
    
    return hasil
}
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]