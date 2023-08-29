//Leet code practice and debugging

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let tempNode = new ListNode(0, null);
  let currentNode = tempNode;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }
    currentNode = currentNode.next;
  }
  currentNode.next = list1 || list2;
  return tempNode.next;
};

let listOne = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
let listTwo = { val: 1, next: { val: 3, next: { val: 4, next: null } } };

mergeTwoLists(listOne, listTwo);
