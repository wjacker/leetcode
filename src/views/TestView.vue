<template>
  <div class="test">
    <h1>This is an test page</h1>
  </div>
</template>

<script lang="ts">
import {ListNode} from '../test/index'
import test from '../test/index'
import { Options, Vue } from 'vue-class-component';

@Options({
  mounted: async function () {
    var result = test.twoSum([4,2,7,11,15], 9);
    var v1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
    var v2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));
    var result2 = test.addTwoNumbers(v1, v2);
  }
})

export default class PageNotFound extends Vue {
}

</script>
