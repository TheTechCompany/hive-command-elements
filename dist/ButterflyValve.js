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
exports.ButterflyValve = void 0;
const React = __importStar(require("react"));
const ButterflyValve = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", xmlSpace: "preserve" }, props),
    React.createElement("linearGradient", { id: "butterfly_valve_svg__a", gradientUnits: "userSpaceOnUse", x1: -895.648, y1: 124.468, x2: -895.648, y2: 173.161, gradientTransform: "matrix(-1 0 0 1 -814.198 -82.706)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#333334",
            } }),
        React.createElement("stop", { offset: 0.501, style: {
                stopColor: "#7d7e81",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#333334",
            } })),
    React.createElement("path", { fill: "url(#butterfly_valve_svg__a)", d: "M73.59 41.66h15.72v48.87H73.59z" }),
    React.createElement("linearGradient", { id: "butterfly_valve_svg__b", gradientUnits: "userSpaceOnUse", x1: -831.563, y1: 124.468, x2: -831.563, y2: 173.161, gradientTransform: "matrix(-1 0 0 1 -814.198 -82.706)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#333334",
            } }),
        React.createElement("stop", { offset: 0.501, style: {
                stopColor: "#7d7e81",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#333334",
            } })),
    React.createElement("path", { fill: "url(#butterfly_valve_svg__b)", d: "M9.51 41.66h15.71v48.87H9.51z" }),
    React.createElement("path", { fill: "none", stroke: "#4C4C4D", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "m34.72 52.87 27.75 27.75M24.64 42.14h47.91v47.91H24.64z" }),
    React.createElement("radialGradient", { id: "butterfly_valve_svg__c", cx: 48.595, cy: 66.296, r: 5.547, gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { offset: 0.019, style: {
                stopColor: "#8d8c8e",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616264",
            } })),
    React.createElement("circle", { fill: "url(#butterfly_valve_svg__c)", cx: 48.6, cy: 66.3, r: 5.55 })));
exports.ButterflyValve = ButterflyValve;
exports.ButterflyValve.metadata = {
    type: 'valve'
};
