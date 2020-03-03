function angkaPalindrome(num) {
    while (num > 0) {
        num++
        let numStr = num.toString()
        
        //reverse
        let cobaBalik = ''
        for (let i = numStr.length-1; i >= 0 ; i--) {
            cobaBalik += numStr[i]
        }
        
        //konfirm palindrome
        if (cobaBalik === numStr) {
            return cobaBalik
        }

    }
    
    
  }
  1201
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001