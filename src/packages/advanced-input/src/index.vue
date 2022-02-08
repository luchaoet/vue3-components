<template>
  <div :ref="doc" @selectionchange="selectionchange" :contenteditable="true" :class="['sh-advanced-input-wrapper', {'sh-advanced-input-focus': focus}]" tabindex="1" hidefocus="true">
	  <b class="ne-t-filler" :contenteditable="false">&#xFEFF;</b>
	  <p :contenteditable="false"><span :contenteditable="false">啊汗</span></p>
	  <b class="ne-t-filler" :contenteditable="false">&#xFEFF;</b>
  </div>
</template>
 
<script lang="ts">
import { defineComponent, ref } from "vue";
import { isString } from "@vue/shared";
export default defineComponent({
	name: "ShAdvancedInput",
	emits: {
		change: (value: string) => isString(value),
	},

	setup(props, { emit, slots }) {
		const doc = ref(null);

		const focus = ref(false);
		const onKeyup = (e: KeyboardEvent) => {
			console.log(e);
		};
		const selectionchange = (e: MouseEvent) => {
			console.log(e);
		};

		// console.log(doc);
		// doc?.value?.onselectionchange = function(e) {
		// 	console.log(e);
		// 	const selection = document.getSelection();
		// };

		return {
			onKeyup,
			focus,
			selectionchange,
			doc,
		};
	},
});
</script>