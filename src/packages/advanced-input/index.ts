import { App } from 'vue'
import AdvancedInput from './src/index.vue'

AdvancedInput.install = (app: App): void => {
    app.component(AdvancedInput.name, AdvancedInput)
}

export default AdvancedInput