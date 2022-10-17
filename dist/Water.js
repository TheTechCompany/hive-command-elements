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
const Water = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 40.1 40.1", xmlSpace: "preserve", role: "img" }, props),
    React.createElement("path", { opacity: 0.5, fill: "#4AE5FF", d: "M1.4 1.4h37.3v37.3H1.4z" }),
    React.createElement("path", { fill: "none", stroke: "#4AE5FF", strokeMiterlimit: 10, d: "M1.4 1.4h37.3v37.3H1.4z" })));
exports.Water = Water;
exports.Water.metadata = {
    width: 100,
    height: 100,
    options: {
        level: 'Number'
    }
};
