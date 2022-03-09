
export class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
}

export default {
  twoSum(nums: number[], target: number): number[] {
    let value;
    for(let i = 0; i < nums.length; i++) {
        value = target - nums[i];
        for(let j = 0; j < nums.length; j++) {
          if(i==j) {
            continue;
          }
          if(nums[j] == value) {
              return [i, j];
          }
        }
    }
    return [];
  },

  addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if(l1 == null && l2 == null) {
      return null;
    }
    const result:ListNode = new ListNode();
    let v1:ListNode|null = l1;
    let v2:ListNode|null = l2;
    let next:ListNode|null = result;
    let parent:ListNode|null = result;
    let carry = 0;
    while(v1 || v2) {
      let value = (v1 ? v1.val : 0) + (v2 ? v2.val : 0) + carry;
      carry = 0;
      if(value >= 10) {
        value = value - 10;
        carry = 1;
      }
      next.val = value;
      next.next = new ListNode();
      parent = next;
      next = next.next;
      v1 = (v1 ? v1.next : null); 
      v2 = (v2 ? v2.next : null); 
    }

    if(carry > 0) {
      next.val = 1;
    } else {
      parent.next = null;
    }
    return result;
  }
}
