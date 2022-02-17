interface Columns {
    prop: String
    label: String
    width: number
    renderCell: Function,
    fixed: String
}

class Store {
    table: Array<Object>
    initialState = {}
    data: Array<Object> = []
    columns: Array<Columns> = []
    constructor(table: any, initialState: Object) {
        this.table = table;
        this.initialState = initialState;
        this.data = table.props.data
    }
    insetColumns(item: Columns) {
        this.columns.push(item)
    }
}

export default Store
