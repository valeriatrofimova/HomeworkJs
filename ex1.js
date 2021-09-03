function isPalindrome(str) {
    var strLen = str.length,
        strReverse = str.split('').reverse().join(''); 
    if (strReverse == str) {
      return true;
    } else {
      return false;
    }
  }

  test = isPalindrome('abcdedcba');
  test1 = isPalindrome('abc');



  console.log(test1);
  console.log(test);

 
