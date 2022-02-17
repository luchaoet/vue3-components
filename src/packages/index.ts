import { App } from 'vue'
import ShButton from './button'
import ShAdvancedInput from './advanced-input'
import { ShTable, ShTableColumn } from './table'
import Icon from './icon'

const components = [ShButton, ShAdvancedInput, ShTable, ShTableColumn, Icon]

const install = (app: App, option: object): void => {
    components.map((component) => app.component(component.name, component))
}

export default { install }

export {
    ShButton,
    ShAdvancedInput,
    ShTable,
    ShTableColumn,
    Icon
}