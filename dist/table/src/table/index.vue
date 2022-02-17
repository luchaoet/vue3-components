<template>
	<div class="hidden-columns"><slot></slot></div>
	<div class="sh-table__body-wrapper">
		<table-body :store="store" :header-align="headerAlign"></table-body>
	</div>
</template>
 
<script lang="ts">
import { defineComponent, getCurrentInstance, provide } from "vue";
import TableStore from "../store";
import TableBody from "../table-body/index.vue";
import type { Store } from "../../defaults";
export default defineComponent({
	name: "ShTable",
	components: {
		TableBody,
	},
	emits: ["selection-change"],
	props: {
		data: {
			type: Array,
			default: [],
		},
		headerAlign: {
			type: String,
			default: "left",
		},
	},
	setup(props, { emit, slots }) {
		const handleClick = (evt: MouseEvent) => {
			// emit("click", evt);
		};
		const store: Store = new TableStore(getCurrentInstance(), {
			rowKey: () => {},
			defaultExpandAll: () => {},
			selectOnIndeterminate: () => {},
		});
		provide("store", store);
		console.log(props.headerAlign);
		return {
			handleClick,
			store,
		};
	},
});
</script>
 
<style lang="scss">
.hidden-columns {
	visibility: hidden;
	position: absolute;
	z-index: -1;
}
</style>