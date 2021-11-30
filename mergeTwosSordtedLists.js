
 // Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let head = new ListNode();
    let current = head;
    let current1 = l1;
    let current2 = l2;

    while (current1 !== null && current2 !== null) {
        if (current1.val < current2.val) {
            current.next = current1;
            current1 = current1.next;
        } else {
            current.next = current2;
            current2 = current2.next;
        }
        current = current.next;
    }
    if (current1 !== null) {
        current.next = current1;
    }
    if (current2 !== null) {
        current.next = current2;
    }
    return head.next;
};

var test = mergeTwoLists([1,2,4], [1,3,4])
console.log(test)