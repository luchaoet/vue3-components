<script lang="ts">
import { defineComponent, computed, h } from "vue";
import "./iconfont";

export default defineComponent({
	name: "ShIcon",
	emits: {
		click: (evt: MouseEvent) => evt instanceof MouseEvent,
	},
	props: {
		style: {
			type: Object,
			default: {},
		},
		color: {
			type: String,
		},
		size: {
			type: Number,
			default: 14,
		},
		type: {
			type: String,
		},
	},
	setup(props, { emit, slots }) {
		const handleClick = (evt: MouseEvent) => {
			emit("click", evt);
		};

		const iStyle = computed(() => {
			return {
				"font-size": `${props.size}px`,
				...props.style,
			};
		});

		return {
			handleClick,
			iStyle,
		};
	},
	render() {
		const { handleClick, style, size, color, type } = this;
		const _style = {
			color,
			fontSize: `${size}px`,
			...style,
		};
		return h(
			"i",
			{
				class: "sh-icon",
				onClick: ($event: MouseEvent) => handleClick($event),
				style: _style,
			},
			[
				h("svg", { "aria-hidden": true }, [
					h("use", { "xlink:href": `#sh-icon-${type}` }, []),
				]),
			]
		);
	},
});
</script>