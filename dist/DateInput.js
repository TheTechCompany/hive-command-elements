"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateInput = void 0;
const material_1 = require("@mui/material");
const x_date_pickers_1 = require("@mui/x-date-pickers");
const react_1 = __importDefault(require("react"));
const DateInput = (props) => {
    var _a, _b;
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(x_date_pickers_1.DatePicker, { onChange: (_a = props.options) === null || _a === void 0 ? void 0 : _a.onChange, value: (_b = props.options) === null || _b === void 0 ? void 0 : _b.value, renderInput: (params) => react_1.default.createElement(material_1.TextField, Object.assign({ size: "small" }, params)) })));
};
exports.DateInput = DateInput;
exports.DateInput.metadata = {
    options: {
        onChange: 'Function',
        value: 'Date'
    }
};
