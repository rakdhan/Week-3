function palindrome(kata) {
    // you can only write your code here!
    
    // console.log(kata.split('').reverse().join(''))
    // return kata === kata.split('').reverse().join('')
    let balikKata = ''
    for (let i = kata.length-1; i >=0; i--) {
        // console.log(kata[i])
        balikKata += kata[i]
    }
    return kata === balikKata
console.log(balikKata)
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false