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
    var _a;
    return (react_1.default.createElement(material_1.Box, { sx: { flex: 1, display: 'flex' } },
        react_1.default.createElement(x_date_pickers_1.DatePicker, { onChange: (value) => { var _a, _b; return value && ((_b = (_a = props.options) === null || _a === void 0 ? void 0 : _a.onChange) === null || _b === void 0 ? void 0 : _b.call(_a, value)); }, value: (_a = props.options) === null || _a === void 0 ? void 0 : _a.value, renderInput: (params) => { var _a; return react_1.default.createElement(material_1.TextField, Object.assign({ fullWidth: true, label: (_a = props.options) === null || _a === void 0 ? void 0 : _a.label, size: "small" }, params)); } })));
};
exports.DateInput = DateInput;
exports.DateInput.metadata = {
    width: 150,
    height: 50,
    options: {
        onChange: 'Function',
        value: 'Date',
        label: 'String'
    }
};
