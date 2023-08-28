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

  for (let i = 0; i < s.length - 1; i++) {
    let current = s[i];
    let next = s[i + 1];

    if (current === '(' && next === ')') {
      result = true;
    } else if (current === '[' && next === ']') {
      result = true;
    } else if (current === '{' && next === '}') {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
};

const example1 = '()';
const example2 = '()[]{}';
const example3 = '(]';

isValid(example2);
