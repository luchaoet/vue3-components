"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShTableColumn = exports.ShTable = void 0;
const tslib_1 = require("tslib");
const index_vue_1 = tslib_1.__importDefault(require("./src/table/index.vue"));
exports.ShTable = index_vue_1.default;
const index_vue_2 = tslib_1.__importDefault(require("./src/table-column/index.vue"));
exports.ShTableColumn = index_vue_2.default;
index_vue_1.default.install = (app) => {
    app.component(index_vue_1.default.name, index_vue_1.default);
};
index_vue_2.default.install = (app) => {
    app.component(index_vue_2.default.name, index_vue_2.default);
};
exports.default = index_vue_1.default;
