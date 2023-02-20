"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const react_1 = __importDefault(require("react"));
const Rectangle = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return (react_1.default.createElement("svg", { width: props.width + ((((_a = props.options) === null || _a === void 0 ? void 0 : _a.strokeWidth) || 0) * 2), height: props.height + ((((_b = props.options) === null || _b === void 0 ? void 0 : _b.strokeWidth) || 0) * 2) },
        react_1.default.createElement("rect", { fill: ((_c = props.options) === null || _c === void 0 ? void 0 : _c.fill) || 'none', width: props === null || props === void 0 ? void 0 : props.width, height: props === null || props === void 0 ? void 0 : props.height, strokeWidth: (_d = props.options) === null || _d === void 0 ? void 0 : _d.strokeWidth, stroke: ((_e = props.options) === null || _e === void 0 ? void 0 : _e.strokeColor) || (!((_f = props.options) === null || _f === void 0 ? void 0 : _f.fill) ? 'black' : undefined), rx: (_g = props.options) === null || _g === void 0 ? void 0 : _g.strokeLineJoin, ry: (_h = props.options) === null || _h === void 0 ? void 0 : _h.rounded })));
};
exports.Rectangle = Rectangle;
exports.Rectangle.metadata = {
    width: 50,
    height: 50,
    options: {
        fill: 'String',
        strokeWidth: 'Number',
        strokeColor: 'String',
        rounded: 'Number'
    }
};
