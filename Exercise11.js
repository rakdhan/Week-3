function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    let perbedaan = arr[1]-arr[0]
    // console.log(perbedaan + '>>>>>>>>')
    for (let i = 0; i < arr.length-1; i++) {
      let difference = arr[i+1] - arr[i]
      // console.log(difference + '========')
      if (perbedaan !== difference) {
        return false
      }
    }return true

  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true  >>> deret++
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false  >>> deret 
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true        >>> deret kelipatan 2
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false     >>>  
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false >>> 