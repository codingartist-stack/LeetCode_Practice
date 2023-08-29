//Leet code practice and debugging
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// {"val":1,"next":{"val":2,"next":{"val":4,"next":null}}}

// Example 1:
//  Input: list1 = [1,2,4], list2 = [1,3,4]
//  Output: [1,1,2,3,4,4]

// Example 2:
//  Input: list1 = [], list2 = []
//  Output: []

// Example 3:
//  Input: list1 = [], list2 = [0]
//  Output: [0]

var mergeTwoLists = function (list1, list2) {
  let combinedList = {};

  let current1 = list1;
  let current2 = list2;

  while (current1 !== null && current2 !== null) {
    if (current1.val < current2.val) {
      combinedList.push(current1.val);
      current1 = current1.next;
    } else {
      combinedList.push(current2.val);
      current2 = current2.next;
    }
  }

  while (current1 !== null) {
    combinedList.push(current1.val);
    current1 = current1.next;
  }

  while (current2 !== null) {
    combinedList.push(current2.val);
    current2 = current2.next;
  }

  return combinedList;
};

list1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
list2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };

mergeTwoLists(list1, list2);
