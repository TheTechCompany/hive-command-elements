"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const Text = (props) => {
    return (react_1.default.createElement(material_1.Typography, null, props.children || "Text"));
};
exports.Text = Text;
exports.Text.metadata = {
    options: {
        border: 'Boolean',
        borderRadius: 'Number'
    }
};
