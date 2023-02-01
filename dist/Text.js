"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const Text = (props) => {
    var _a, _b, _c, _d;
    return (react_1.default.createElement(material_1.Box, { sx: {
            border: ((_a = props.options) === null || _a === void 0 ? void 0 : _a.border) ? '1px solid black' : undefined,
            borerRadius: ((_b = props.options) === null || _b === void 0 ? void 0 : _b.borderRadius) != undefined ? `${(_c = props.options) === null || _c === void 0 ? void 0 : _c.borderRadius}px` : undefined
        } },
        react_1.default.createElement(material_1.Typography, null, ((_d = props.options) === null || _d === void 0 ? void 0 : _d.text) || props.children || "Text")));
};
exports.Text = Text;
exports.Text.metadata = {
    options: {
        text: 'String',
        border: 'Boolean',
        borderRadius: 'Number'
    }
};
