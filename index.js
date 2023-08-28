//Leet code practice and debugging
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

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
  let i = 0;
  let j = 0;
  let k = 0;
  let combinedList = [];

  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      combinedList[k] = list1[i];
      i++;
    } else {
      combinedList[k] = list2[j];
      j++;
    }
    k++;
  }

  for (; i < list1.length; i++) {
    combinedList[k] = list1[i];
    k++;
  }

  for (; j < list2.length; j++) {
    combinedList[k] = list2[j];
    k++;
  }

  return combinedList;
};

list1 = [1, 2, 4];
list2 = [1, 3, 4];

mergeTwoLists(list1, list2);
