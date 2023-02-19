"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const react_1 = __importDefault(require("react"));
const Rectangle = (props) => {
    var _a, _b, _c;
    console.log("Rectangle", props);
    return (react_1.default.createElement("svg", null,
        react_1.default.createElement("rect", { strokeWidth: (_a = props.options) === null || _a === void 0 ? void 0 : _a.strokeWidth, stroke: (_b = props.options) === null || _b === void 0 ? void 0 : _b.strokeColor, strokeLinejoin: (_c = props.options) === null || _c === void 0 ? void 0 : _c.strokeLineJoin })));
};
exports.Rectangle = Rectangle;
exports.Rectangle.metadata = {
    width: 50,
    height: 50,
    options: {
        strokeWidth: 'Number',
        strokeColor: 'String',
        strokeLineJoin: 'String'
    }
};
