
<script lang="ts">
import { defineComponent, inject, h, Fragment } from "vue";
import type { Store } from "../../defaults";
export default defineComponent({
	name: "ShTableColumn",
	emits: {
		click: (evt: MouseEvent) => evt instanceof MouseEvent,
	},
	props: {
		prop: String,
		label: String || Number,
		width: String || Number,
	},
	setup(props, { emit, slots }) {
		const store: Store | undefined = inject("store");
		interface RowData {
			row: Object;
			column: Object;
		}
		const renderCell = (data: RowData) => {
			let children = null;
			if (slots.default) {
				children = slots.default?.(data);
			} else if (props.prop) {
				children = data.row[props.prop];
			}
			return h("div", { class: "cell" }, [children]);
		};
		store?.insetColumns({
			...props,
			renderCell,
		});

		const handleClick = (evt: MouseEvent) => {
			emit("click", evt);
		};
		// console.log(slots.default);
		return {
			handleClick,
		};
	},
	render() {
		return h("div", []);
	},
	// render() {
	// 	let children = [];
	// 	try {
	// 		const renderDefault = this.$slots.default?.({
	// 			row: {},
	// 			column: {},
	// 			$index: -1,
	// 		});
	// 		if (renderDefault instanceof Array) {
	// 			for (const childNode of renderDefault) {
	// 				console.log(childNode);
	// 				if (childNode.shapeFlag & 2) {
	// 					children.push(childNode);
	// 				} else if (
	// 					childNode.type === Fragment &&
	// 					childNode.children instanceof Array
	// 				) {
	// 					children.push(...childNode.children);
	// 				}
	// 			}
	// 		}
	// 	} catch {
	// 		children = [];
	// 	}
	// 	return h("div", children);
	// },
});
</script>
 
<style lang="scss">
</style>