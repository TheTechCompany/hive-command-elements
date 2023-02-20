"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const react_1 = __importDefault(require("react"));
const Circle = (props) => {
    var _a;
    return (react_1.default.createElement("svg", null,
        react_1.default.createElement("circle", { stroke: (_a = props.options) === null || _a === void 0 ? void 0 : _a.strokeColor, radius: props === null || props === void 0 ? void 0 : props.width })));
};
exports.Circle = Circle;
exports.Circle.metadata = {
    width: 50,
    height: 50,
    options: {
        strokeColor: 'String'
    }
};
