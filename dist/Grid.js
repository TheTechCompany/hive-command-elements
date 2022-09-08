"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const Grid = (props) => {
    return (react_1.default.createElement(material_1.Grid, { container: true, spacing: 2 }, props.items.map((item) => (react_1.default.createElement(material_1.Grid, { item: true, xs: props.cellSize }, item)))));
};
exports.Grid = Grid;
exports.Grid.metadata = {
    options: {
        cellSize: 'Number',
        items: 'Array'
    }
};
