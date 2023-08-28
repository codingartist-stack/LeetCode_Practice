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

//hint says to us a stack...
//gave up trying to figure it out going to copy a solution and run through it to understand it better.

var isValid = function (s) {
  stack = [];
  for (symbol of s) {
    if (symbol === '(' || symbol === '[' || symbol === '{') {
      stack.push(symbol);
    } else {
      if (
        !stack.length || //stack is empty
        (symbol === ')' && stack[stack.length - 1] !== '(') ||
        (symbol === ']' && stack[stack.length - 1] !== '[') ||
        (symbol === '}' && stack[stack.length - 1] !== '{')
      ) {
        return false;
      }
      stack.pop();
    }
  }

  return !stack.length;
};

const example1 = '()';
const example2 = '()[]{}';
const example3 = '(]';

isValid(example3);
