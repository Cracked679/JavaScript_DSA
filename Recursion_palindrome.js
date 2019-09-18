
function isPalindrome(str) {
  if (str.length <= 1) return true;

  if (str[0] !== str[str.length - 1]) return false;

  return isPalindrome(str.slice(1, -1)); // extracts the second element through the second-to-last element in the string
}

console.log(isPalindrome('abcddcba'));