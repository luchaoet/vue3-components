 
<script lang="ts">
import { defineComponent, reactive, toRefs, h } from "vue";
interface Columns {
	prop: String;
	label: String;
	width: number;
	renderCell: Function;
	fixed: String;
}
export default defineComponent({
	name: "ShTableBody",
	emits: {},
	props: {
		store: {
			type: Object,
			required: true,
		},
		headerAlign: String,
		xPosition: String,
	},
	setup(props, { emit, slots }) {
		const state = reactive({
			data: [],
			columns: [],
		});
		state.data = props.store.data;
		state.columns = props.store.columns;
		return {
			...toRefs(state),
		};
	},
	render() {
		const { store } = this;
		const data = store.data;
		const columns = store.columns;

		const width = columns.reduce(
			(total: number, item: Columns) => total + item.width || 80,
			0
		);

		return h(
			"table",
			{
				class: "sh-table__body",
				cellspacing: "0",
				cellpadding: "0",
				border: "0",
				style: { width: `${width}px` },
			},
			[
				h("colgroup", {}, [
					...columns.map((c: Columns) =>
						h("col", { width: c.width || 80 }, [])
					),
				]),
				h("thead", {}, [
					h("tr", { class: `is-${this.headerAlign}` }, [
						...columns.map((c: any) =>
							h(
								"th",
								{
									class: [
										"el-table__cell",
										{
											[`is-fixed-${c.fixed || "left"}`]:
												typeof c.fixed === "string",
										},
										{
											"is-scrolling":
												(this.xPosition !== "left" &&
													(c.fixed === "" || c.fixed === "left")) ||
												(this.xPosition !== "right" && c.fixed === "right"),
										},
									],
								},
								[h("div", { class: "cell" }, [c.label])]
							)
						),
					]),
				]),
				h("tbody", {}, [
					...data.map((d: any) =>
						h("tr", { class: "sh-table__row" }, [
							...columns.map((c: Columns) =>
								h(
									"td",
									{
										class: [
											"el-table__cell",
											{
												[`is-fixed-${c.fixed || "left"}`]:
													typeof c.fixed === "string",
											},
											{
												"is-scrolling":
													(this.xPosition !== "left" &&
														(c.fixed === "" || c.fixed === "left")) ||
													(this.xPosition !== "right" && c.fixed === "right"),
											},
										],
									},
									[c.renderCell({ row: d, column: c })]
								)
							),
						])
					),
				]),
			]
		);
	},
});
</script>
 
<style lang="scss">
</style>

<!--
<template>
 <thead>
	<tr>
		<th v-for="item in columns">{{item.label}}</th>
	</tr>
</thead>
<tbody>
  	<tr v-for="item in data">
	  <td v-for="column in columns">
		  {{column.renderCell({row: item, column})}}
	  </td>
	</tr>

</tbody> 
</template>
-->