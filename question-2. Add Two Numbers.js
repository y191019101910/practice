//question- Add Two Numbers
//Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
//Output: 7 -> 0 -> 8
//Explanation: 342 + 465 = 807.

var addTwoNumbers = function(l1, l2) {
    var list = new ListNode(0);
    var result = list;

    add(l1,l2,0);
    return result.next;

    function add(l1,l2,gap){
        var sum = 0;
        if(l1 === null && l2 === null && gap === 0){
            return 0;
        }

        if(l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }

        if(l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }
        sum += gap;
        list.next = new ListNode(sum%10);
        gap = parseInt(sum/10);
        list = list.next;
        add(l1,l2,gap);
    }
};
addTwoNumbers(l1, l2);