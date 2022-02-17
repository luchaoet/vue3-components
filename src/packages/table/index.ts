import { App } from 'vue'
import ShTable from './src/table/index.vue'
import ShTableColumn from './src/table-column/index.vue'

ShTable.install = (app: App): void => {
    app.component(ShTable.name, ShTable)
}
ShTableColumn.install = (app: App): void => {
    app.component(ShTableColumn.name, ShTableColumn)
}

export default ShTable
export {
    ShTable,
    ShTableColumn
}