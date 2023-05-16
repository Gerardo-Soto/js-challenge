/**
 * Definition for singly-linked list.
**/
class ListNode{
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    };
    
    /**
     * Definition to print nodes from ListNode
     */
    printListNode() {
        let current = this;
        while (current) {
            console.log(current.val);
            current = current.next;
        };
    };
    

    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    swapNodes(k) {
        let head = this;
        // First case. the head is empty:
        if (!head) {
            return null;
        };

        // Second case. the head isn't empty:
        // our two index are copies of head
        let left = head, right = head;

        // Getting the first index left:
        for (let indexLeft = 1; indexLeft < k; indexLeft++) {
            left = left.next;
        };

        let current = left;// this variable has n nodes from K-th to end of the ListNode
        // Getting the second index right
        while(current.next){
            current = current.next
            right = right.next;
        };

        // changing values 
        let temporalValue = left.val;
        left.val = right.val;
        right.val = temporalValue;

        return head;
    }
};



//Creating a NodeList:
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
let node6 = new ListNode(6);

// Linking the nodes:
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

// set initial node (head)
let head = node1;

// Change order
// Call function swapNodes with the ListNode and k
head.swapNodes(3);

// Print the actual ListNode
console.log( head.printListNode() );