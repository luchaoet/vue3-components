<template>
	<el-scrollbar @scroll="handleScroll" :height="300">
		<div class="sh-table__body-wrapper">
			<div class="hidden-columns"><slot></slot></div>
			<table-body :store="store" :header-align="headerAlign" :x-position="xPosition"></table-body>
		</div>
	</el-scrollbar>
</template>
 
<script lang="ts">
import {
	defineComponent,
	getCurrentInstance,
	onMounted,
	provide,
	ref,
} from "vue";
import TableStore from "../store";
import TableBody from "../table-body/index.vue";
import type { Store } from "../../defaults";
import { ElScrollbar } from "element-plus";
export default defineComponent({
	name: "ShTable",
	components: {
		TableBody,
		ElScrollbar,
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
		const xPosition = ref("left");
		const store: Store = new TableStore(getCurrentInstance(), {
			rowKey: () => {},
			defaultExpandAll: () => {},
			selectOnIndeterminate: () => {},
		});
		provide("store", store);

		const handleScroll = ({ scrollLeft }: { scrollLeft: number }) => {
			let _xPosition = "left";
			if (scrollLeft === 0) {
				_xPosition = "left";
			} else if (scrollLeft > 0) {
				_xPosition = "center";
			} else if (scrollLeft > 400) {
				_xPosition = "right";
			}
			xPosition.value = _xPosition;
		};

		return {
			xPosition,
			handleScroll,
			store,
		};
	},
});
</script>
 
<style lang="scss">
</style>