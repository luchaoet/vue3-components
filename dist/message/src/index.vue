<template>
  <div class="xtx-message" :style="style[type]" v-show="visible">
    <!-- 上面绑定的是样式 -->
    <!-- 不同提示图标会变 -->
    <i class="iconfont" :class="[style[type].icon]"></i>
    <span class="text">{{text}}</span>
  </div>
</template>
 
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
	name: "ShMessage",
	props: {
		text: {
			type: String,
			default: "",
		},
		type: {
			type: String,
			// warn 警告  error 错误  success 成功
			default: "warn",
		},
	},
	setup() {
		const style = {
			warn: {
				icon: "icon-warning",
				color: "#E6A23C",
				backgroundColor: "rgb(253, 246, 236)",
				borderColor: "rgb(250, 236, 216)",
			},
			error: {
				icon: "icon-shanchu",
				color: "#F56C6C",
				backgroundColor: "rgb(254, 240, 240)",
				borderColor: "rgb(253, 226, 226)",
			},
			success: {
				icon: "icon-queren2",
				color: "#67C23A",
				backgroundColor: "rgb(240, 249, 235)",
				borderColor: "rgb(225, 243, 216)",
			},
		};
		const visible = ref(false);
		onMounted(() => {
			visible.value = true;
		});
		return { style, visible };
	},
});
</script>

<style lang="scss">
.xtx-message {
	width: 300px;
	height: 50px;
	position: fixed;
	z-index: 9999;
	left: 50%;
	margin-left: -150px;
	top: 25px;
	line-height: 50px;
	padding: 0 25px;
	border: 1px solid #e4e4e4;
	background: #f5f5f5;
	color: #999;
	border-radius: 4px;
	i {
		margin-right: 4px;
		vertical-align: middle;
	}
	.text {
		vertical-align: middle;
	}
}
</style>