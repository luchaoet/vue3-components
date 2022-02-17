<template>
	<sh-case title="按钮" description="size 大小">
		<sh-button size="large">按钮</sh-button>
		<sh-button size="default">按钮</sh-button>
		<sh-button size="small">按钮</sh-button>
	</sh-case>

	<sh-case title="按钮" description="type 样式">
		<sh-button type="default">按钮</sh-button>
		<sh-button type="primary">按钮</sh-button>
		<sh-button type="success">按钮</sh-button>
		<sh-button type="warning">按钮</sh-button>
		<sh-button type="info">按钮</sh-button>
		<sh-button type="danger">按钮</sh-button>
		<sh-button type="text">按钮</sh-button>
	</sh-case>

  <sh-case title="表格">
    <sh-table :data="tableData" header-align="left">
		<sh-table-column prop="date" label="Date" :width="150" fixed />
		<sh-table-column prop="date" label="Date" :width="150" />
		<sh-table-column prop="date" label="Date" :width="150" />
		<sh-table-column prop="date" label="Date" :width="150" />
		<sh-table-column prop="date" label="Date" :width="150" />
		<sh-table-column prop="date" label="Date" :width="150" />
		<sh-table-column prop="date" label="Date" :width="150" />
		<sh-table-column prop="date" label="Date" :width="150" />
		<sh-table-column prop="date" label="Date" :width="150" />
		<sh-table-column prop="date" label="Date" :width="150" />
		<sh-table-column prop="date" label="Date" :width="150" />
		<sh-table-column prop="name" label="Name" :width="150" />
		<sh-table-column prop="name" label="Name" :width="150" />
		<sh-table-column prop="name" label="Name" :width="150" />
		<sh-table-column prop="name" label="Name" :width="150" />
		<sh-table-column prop="name" label="Name" :width="150" />
		<sh-table-column prop="name" label="Name" :width="150" />
		<sh-table-column label="Address" :width="150" fixed="right">
			<template #default="scope">{{scope.row.address}}</template>
		</sh-table-column>
	  </sh-table>
  </sh-case>

	<sh-case title="图标">
		<sh-icon :size="20" type="search" @click="handleClick" />
		<sh-icon :size="20" type="warning" @click="handleClick" />
		<sh-icon :size="20" type="error" @click="handleClick" />
		<sh-icon :size="20" type="success" @click="handleClick" />
		<sh-icon :size="20" type="delete" @click="handleClick" />
		<sh-icon :size="20" type="info" @click="handleClick" />
		<sh-icon :size="20" type="left" @click="handleClick" />
		<sh-icon :size="20" type="right" @click="handleClick" />
		<sh-icon :size="20" type="down" @click="handleClick" />
		<sh-icon :size="20" type="top" @click="handleClick" />
		<sh-icon :size="20" type="check" @click="handleClick" />
		<sh-icon :size="20" type="delete2" @click="handleClick" />
		<sh-icon :size="20" type="menu" @click="handleClick" />
		<sh-icon :size="20" type="more" @click="handleClick" />
		<sh-icon :size="20" type="add" @click="handleClick" />
		<sh-icon :size="20" type="reduce" @click="handleClick" />
		<sh-icon :size="20" type="loading" @click="handleClick" />
	</sh-case>

	<sh-case title="按钮图标">
		<sh-button>123<sh-icon :size="20" type="loading" @click="handleClick" /></sh-button>
	</sh-case>


</template>

<script lang="ts">
import { defineComponent } from "vue";
import Case from "../components/case.vue";

export default defineComponent({
	name: "Home",
	props: {
		msg: String,
	},
	components: {
		"sh-case": Case,
	},
	setup(props: any, context: any) {
		const handleClick = (event: any) => {
			console.log("handleClick");
		};
		const tableData = [
			{
				date: "2016-05-03",
				name: "Tom",
				address: "No. 189, Grove St, Los Angeles",
			},
			{
				date: "2016-05-02",
				name: "Tom",
				address: "No. 189, Grove St, Los Angeles",
			},
			{
				date: "2016-05-04",
				name: "Tom",
				address: "No. 189, Grove St, Los Angeles",
			},
			{
				date: "2016-05-01",
				name: "Tom",
				address: "No. 189, Grove St, Los Angeles",
			},
			{
				date: "2016-05-01",
				name: "Tom",
				address: "No. 189, Grove St, Los Angeles",
			},
			{
				date: "2016-05-01",
				name: "Tom",
				address: "No. 189, Grove St, Los Angeles",
			},
			{
				date: "2016-05-01",
				name: "Tom",
				address: "No. 189, Grove St, Los Angeles",
			},
			{
				date: "2016-05-01",
				name: "Tom",
				address: "No. 189, Grove St, Los Angeles",
			},
			{
				date: "2016-05-01",
				name: "Tom",
				address: "No. 189, Grove St, Los Angeles",
			},
			{
				date: "2016-05-01",
				name: "Tom",
				address: "No. 189, Grove St, Los Angeles",
			},
			{
				date: "2016-05-01",
				name: "Tom",
				address: "No. 189, Grove St, Los Angeles",
			},
		];
		return {
			handleClick,
			tableData,
		};
	},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
div.example-showcase {
	padding: 20px;
	& > div > .sh-icon {
		margin-right: 10px;
		width: 30px;
		height: 30px;
		border-radius: 15px;
		cursor: pointer;
		&:hover {
			background-color: #eceded;
		}
	}
}
</style>
