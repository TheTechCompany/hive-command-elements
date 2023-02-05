"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeInput = void 0;
const material_1 = require("@mui/material");
const x_date_pickers_1 = require("@mui/x-date-pickers");
const react_1 = __importDefault(require("react"));
const TimeInput = (props) => {
    var _a;
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(x_date_pickers_1.TimePicker, { onChange: (value) => { var _a, _b; return value && ((_b = (_a = props.options) === null || _a === void 0 ? void 0 : _a.onChange) === null || _b === void 0 ? void 0 : _b.call(_a, value)); }, value: (_a = props.options) === null || _a === void 0 ? void 0 : _a.value, renderInput: (params) => react_1.default.createElement(material_1.TextField, Object.assign({ size: "small" }, params)) })));
};
exports.TimeInput = TimeInput;
exports.TimeInput.metadata = {
    options: {
        onChange: 'Function',
        value: 'Date'
    }
};
