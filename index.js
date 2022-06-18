function isPalindrome(word) {
  let wordLowerCase=word.toLowerCase();
  let wordSeparate=wordLowerCase.split('').reverse().join('')
  if(wordLowerCase===wordSeparate){
     return true;
   }else{
     return false;
   }
}
if (require.main===module){
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>",isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>",isPalindrome("robot"));
}

module.exports = isPalindrome;
