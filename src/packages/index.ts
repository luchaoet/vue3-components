import { App } from 'vue'
import ShButton from './button'
import ShAdvancedInput from './advanced-input'

// 所有组件列表
const components = [ShButton, ShAdvancedInput]

// 定义 install 方法， App 作为参数
const install = (app: App, option: object): void => {
    // 遍历注册所有组件
    components.map((component) => app.component(component.name, component))
}

export {
    ShButton,
    ShAdvancedInput
}

export default {
    install
}