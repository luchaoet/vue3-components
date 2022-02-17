"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.ShTableColumn = exports.ShTable = exports.ShAdvancedInput = exports.ShButton = void 0;
const tslib_1 = require("tslib");
const button_1 = tslib_1.__importDefault(require("./button"));
exports.ShButton = button_1.default;
const advanced_input_1 = tslib_1.__importDefault(require("./advanced-input"));
exports.ShAdvancedInput = advanced_input_1.default;
const table_1 = require("./table");
Object.defineProperty(exports, "ShTable", { enumerable: true, get: function () { return table_1.ShTable; } });
Object.defineProperty(exports, "ShTableColumn", { enumerable: true, get: function () { return table_1.ShTableColumn; } });
const icon_1 = tslib_1.__importDefault(require("./icon"));
exports.Icon = icon_1.default;
// 所有组件列表
const components = [button_1.default, advanced_input_1.default, table_1.ShTable, table_1.ShTableColumn, icon_1.default];
// 定义 install 方法， App 作为参数
const install = (app, option) => {
    // 遍历注册所有组件
    components.map((component) => app.component(component.name, component));
};
exports.default = {
    install
};
