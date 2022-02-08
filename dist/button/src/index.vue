<template>
  <button class="sh-button" @click="handleClick">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
 
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "ShButton",
	emits: {
		click: (evt: MouseEvent) => evt instanceof MouseEvent,
	},
	setup(props, { emit, slots }) {
		const handleClick = (evt: MouseEvent) => {
			emit("click", evt);
		};
		return {
			handleClick,
		};
	},
});
</script>