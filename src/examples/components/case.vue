<template>
  <div class="example-showcase">
    <h3>{{title}}</h3>
    <p v-if="description">{{description}}</p>
    <div><slot></slot></div>
  </div>
</template>
 
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "sh-case",
	props: {
		title: String,
		description: String,
	},
});
</script>
<style lang="scss">
.example-showcase {
	padding: 20px;
	& > h3 {
		margin: 0 0 10px 0;
	}
	& > div {
		padding-left: 20px;
	}
	& > p {
		margin: 0 0 10px 20px;
		font-size: 14px;
	}
}
</style>