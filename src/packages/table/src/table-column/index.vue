
<script lang="ts">
import { defineComponent, inject, h } from "vue";
import type { Store } from "../../defaults";
export default defineComponent({
	name: "ShTableColumn",
	emits: {
		click: (evt: MouseEvent) => evt instanceof MouseEvent,
	},
	props: {
		prop: String,
		label: String,
		width: Number,
		fixed: String,
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

		const handleClick = ($event: MouseEvent) => {
			emit("click", $event);
		};

		return {
			handleClick,
		};
	},
	render() {
		return h("div", []);
	},
});
</script>
 
<style lang="scss">
</style>