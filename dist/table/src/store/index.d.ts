declare class Store {
    table: Array<Object>;
    initialState: {};
    data: Array<Object>;
    columns: Array<Object>;
    constructor(table: any, initialState: Object);
    insetColumns(item: Object): void;
}
export default Store;
