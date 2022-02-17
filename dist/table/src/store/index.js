"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Store {
    constructor(table, initialState) {
        this.initialState = {};
        this.data = [];
        this.columns = [];
        this.table = table;
        this.initialState = initialState;
        this.data = table.props.data;
    }
    insetColumns(item) {
        this.columns.push(item);
    }
}
exports.default = Store;
