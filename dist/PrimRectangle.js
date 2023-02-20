"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const react_1 = __importDefault(require("react"));
const Rectangle = (props) => {
    var _a, _b, _c, _d;
    return (react_1.default.createElement("svg", { width: props.width, height: props.height },
        react_1.default.createElement("rect", { fill: ((_a = props.options) === null || _a === void 0 ? void 0 : _a.fill) || 'none', width: props === null || props === void 0 ? void 0 : props.width, height: props === null || props === void 0 ? void 0 : props.height, strokeWidth: (_b = props.options) === null || _b === void 0 ? void 0 : _b.strokeWidth, stroke: (_c = props.options) === null || _c === void 0 ? void 0 : _c.strokeColor, strokeLinejoin: (_d = props.options) === null || _d === void 0 ? void 0 : _d.strokeLineJoin })));
};
exports.Rectangle = Rectangle;
exports.Rectangle.metadata = {
    width: 50,
    height: 50,
    options: {
        fill: 'String',
        strokeWidth: 'Number',
        strokeColor: 'String',
        strokeLineJoin: 'String'
    }
};
