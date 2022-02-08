"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const index_vue_1 = tslib_1.__importDefault(require("./src/index.vue"));
index_vue_1.default.install = (app) => {
    app.component(index_vue_1.default.name, index_vue_1.default);
};
exports.default = index_vue_1.default;
