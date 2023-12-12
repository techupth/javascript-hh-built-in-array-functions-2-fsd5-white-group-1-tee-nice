function isPalindrome(string) {
  // Start coding here

  function cleanString(string) {
    return string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  }

  function reverseString(string) {
    return string.split("").reverse().join("");
  }

  const cleanedString = cleanString(string);
  const reversedString = reverseString(cleanedString);
  return cleanedString === reversedString;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("noon")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
