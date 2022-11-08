"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Water = void 0;
const React = __importStar(require("react"));
const Water = (props) => {
    var _a;
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "2.5 2 40 40", xmlSpace: "preserve", preserveAspectRatio: "none", style: {
            transformOrigin: '0 bottom',
            transform: `scaleY(${(parseFloat(((_a = props.options) === null || _a === void 0 ? void 0 : _a.level) || 100) / 100) || 1})`
        } }, props),
        React.createElement("path", { fill: "#4AE5FF", d: "M41.4 35.5c0 2.8-2.2 5-5 5H9c-2.8 0-5-2.2-5-5V8.1c0-2.8 2.2-5 5-5h27.3c2.8 0 5 2.3 5 5v27.4z", opacity: 0.5 }),
        React.createElement("path", { fill: "none", stroke: "#4AE5FF", strokeMiterlimit: 10, d: "M41.4 35.5c0 2.8-2.2 5-5 5H9c-2.8 0-5-2.2-5-5V8.1c0-2.8 2.2-5 5-5h27.3c2.8 0 5 2.3 5 5v27.4z" })));
};
exports.Water = Water;
exports.Water.metadata = {
    width: 100,
    height: 100,
    options: {
        level: 'Number'
    }
};
