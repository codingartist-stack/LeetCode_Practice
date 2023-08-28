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
  let result = false;

  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    let next = s[i + 1];
  }
  return result;
};

const example1 = '()';
const example2 = '()[]{}';
const example3 = '(]';

isValid(example1);
