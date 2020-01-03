function angkaPalindrome(num) {
    // you can only write your code here!
    let isPal = false
    while (isPal === false) {
        num++
        let numStr = num.toString()
        // console.log(numStr)
        
        //REVERSE 
        let balik = ''
        for (let i = numStr.length-1; i >= 0; i--) {
            balik += numStr[i]
        }
        // console.log(balik)

        // CEK PALINDROME
        // console.log(balik, num)
        // console.log(num)        
        if (balik === numStr) {
            isPal = true
            return balik
        }
        // console.log(balik)
    }

    // for (let i=0; i < .length; i++) {
    //     const element = array[i];
        
    // }
  }
  1201
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001