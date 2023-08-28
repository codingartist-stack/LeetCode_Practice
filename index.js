//Leet code practice and debugging

//Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

var isValid = function (s) {
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    let next = s[i + 1];

    if (current !== next) {
      return false;
    }

    return true;
  }
};
