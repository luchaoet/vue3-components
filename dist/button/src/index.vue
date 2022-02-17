<template>
  <button 
	:class="[
		'sh-button',
		`sh-button--size-${bSize}`,
		`sh-button--type-${bType}`,
	]" 
	@click="handleClick"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
 
<script lang="ts">
import { defineComponent, computed } from "vue";
const buttonType = [
	"default",
	"primary",
	"success",
	"warning",
	"info",
	"danger",
	"text",
];
const buttonSize = ["large", "default", "small"];

export default defineComponent({
	name: "ShButton",
	emits: {
		click: (evt: MouseEvent) => evt instanceof MouseEvent,
	},
	props: {
		size: {
			type: String,
			default: "default",
			validator: (value: string) => buttonSize.indexOf(value) !== -1,
		},
		type: {
			type: String,
			default: "primary",
			validator: (value: string) => buttonType.indexOf(value) !== -1,
		},
	},
	setup(props, { emit, slots }) {
		const handleClick = (evt: MouseEvent) => {
			emit("click", evt);
		};

		const bSize = computed(() => {
			return buttonSize.indexOf(props.size) === -1 ? "default" : props.size;
		});
		const bType = computed(() => {
			return buttonType.indexOf(props.type) === -1 ? "primary" : props.type;
		});

		return {
			handleClick,
			bSize,
			bType,
		};
	},
});
</script>