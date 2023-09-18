/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    //Second way: use array to save references and easily modify after 1 pass.

    let nodes = [];

    let curr = head;
    nodes.push(curr);

    //add values to array
    while(curr.next){
        curr = curr.next;
        nodes.push(curr);
    }

    //Are we removing the first 
    //If size == length 1, return nothing.
    if(nodes.length == 1){
        return null;
    }

    //Are we removing the first value?
    if(nodes.length == n){
        head = head.next;
        return head;
    }
   
    //Remove Node
    nodes[nodes.length - (n + 1)].next = nodes[nodes.length - (n + 1)].next.next;
    
    return head;
};
