 
<script lang="ts">
import { defineComponent, reactive, toRefs, h } from "vue";

export default defineComponent({
	name: "ShTableBody",
	emits: {},
	props: {
		store: {
			type: Object,
			required: true,
		},
		headerAlign: String,
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

		return h(
			"table",
			{
				class: "sh-table__body",
				cellspacing: "0",
				cellpadding: "0",
				border: "0",
				style: { width: "600px" },
			},
			[
				h("colgroup", {}, [
					...columns.map((c: any) => h("col", { width: 200 }, [])),
				]),
				h("thead", {}, [
					h("tr", { class: `is-${this.headerAlign}` }, [
						...columns.map((c: any) =>
							h("th", { class: "el-table__cell" }, [
								h("div", { class: "cell" }, [c.label]),
							])
						),
					]),
				]),
				h("tbody", {}, [
					...data.map((d: any) =>
						h("tr", { class: "sh-table__row" }, [
							...columns.map((c: any) =>
								h("td", { class: "el-table__cell" }, [
									c.renderCell({ row: d, column: c }),
								])
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