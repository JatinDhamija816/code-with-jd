var isPalindrome = function (s) {
  s = s.toLowerCase();

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    while (start < end && !isAplhaNumeric(s[start])) {
      start++;
    }

    while (start < end && !isAplhaNumeric(s[end])) {
      end--;
    }

    if (s[start] !== s[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};

function isAplhaNumeric(char) {
  let code = char.charCodeAt(0);

  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
