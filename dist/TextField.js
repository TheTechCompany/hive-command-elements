"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextField = void 0;
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const TextField = (props) => {
    var _a, _b, _c;
    return (react_1.default.createElement(material_1.Box, { sx: { flex: 1, display: 'flex' } },
        react_1.default.createElement(material_1.TextField, { size: "small", fullWidth: true, onChange: (e) => { var _a, _b; return (_b = (_a = props.options) === null || _a === void 0 ? void 0 : _a.onChange) === null || _b === void 0 ? void 0 : _b.call(_a, e.target.value); }, value: ((_a = props.options) === null || _a === void 0 ? void 0 : _a.value) || null, type: (_b = props.options) === null || _b === void 0 ? void 0 : _b.type, label: (_c = props.options) === null || _c === void 0 ? void 0 : _c.label })));
};
exports.TextField = TextField;
exports.TextField.metadata = {
    width: 150,
    height: 50,
    options: {
        onChange: 'Function',
        value: 'String',
        type: 'String',
        label: 'String'
    }
};
