function tentukanDeretAritmatika(arr) {
    // asumsikan selisih angka pertama a/ deret yg benar
    var trueSelisih = arr[1] - arr[0]
    for (let i = 0; i < arr.length-1; i++) {
        var cekSelisih = arr[i+1] - arr[i]        
    }
    // jika deret tidak sesuai sampai akhir, maka false
    if (trueSelisih !== cekSelisih) {
        return false
    }
    return true
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true  >>> deret++
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false  >>> deret 
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true        >>> deret kelipatan 2
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false     >>>  
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false >>> 