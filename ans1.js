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
    
    //First way: simple 2 pass

    let counter = 1;
    let curr = head;

    //First pass, find length
    while(curr.next){
        curr = curr.next;
        counter++;
    }

    //save length
    let size = counter;

    //If size == length 1, return nothing.
    if(size == 1){
        return null;
    }

    //Are we removing the first value?
    if(size == n){
        head = head.next;
        return head;
    }


    //Now find the length - nth position
    counter = 1;
    curr  = head;

    while(counter <= size){
        if(counter == size - (n) ){
            let temp = curr;
            curr = curr.next;
            temp.next = curr.next;
            break;
        }
        curr = curr.next;
        counter++;
    }

    return head;
};
