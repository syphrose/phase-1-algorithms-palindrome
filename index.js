function isPalindrome(word) {
  // iterate from the start to the center point
  for(let i=0; i<word.length /2; i++){
    // confirm every letter to see if it corresponds with the last one
  
    const a=word.length -1 -i;
    // if any letters can't match, return false
    if(word[i] !== word[a]) return false;
  }
  return true
  }

if (require.main===module){
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>",isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>",isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
}

module.exports = isPalindrome;
