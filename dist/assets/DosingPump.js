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
const React = __importStar(require("react"));
const SvgDosingPump = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 69.9 69.9", xmlSpace: "preserve" }, props),
    React.createElement("linearGradient", { id: "DosingPump_svg__a", gradientUnits: "userSpaceOnUse", x1: 9.843, y1: 14.668, x2: 49.952, y2: 54.778 },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#616365",
            } }),
        React.createElement("stop", { offset: 0.496, style: {
                stopColor: "#8c8b8d",
            } }),
        React.createElement("stop", { offset: 0.552, style: {
                stopColor: "#828284",
            } }),
        React.createElement("stop", { offset: 0.704, style: {
                stopColor: "#6f7072",
            } }),
        React.createElement("stop", { offset: 0.855, style: {
                stopColor: "#656668",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616365",
            } })),
    React.createElement("path", { fill: "url(#DosingPump_svg__a)", d: "M41.5 9.5H18.3c-4.4 0-8 3.6-8 8v34.4c0 4.4 3.6 8 8 8h23.2c4.4 0 8-3.6 8-8V17.5c0-4.4-3.6-8-8-8z" }),
    React.createElement("linearGradient", { id: "DosingPump_svg__b", gradientUnits: "userSpaceOnUse", x1: -33.425, y1: 219.15, x2: -33.425, y2: 201.361, gradientTransform: "rotate(180 5.76 130.641)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#616365",
            } }),
        React.createElement("stop", { offset: 0.532, style: {
                stopColor: "#8c8b8d",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616365",
            } })),
    React.createElement("path", { fill: "url(#DosingPump_svg__b)", d: "M31.6 59.9s.4-17.8 17.8-17.8h8.9v17.8H31.6z" }),
    React.createElement("path", { opacity: 0.33, fill: "#6BBE45", d: "M33.9 55.2h-7.5c-7.8 0-9.5-6.3-9.5-14.1V28.3c0-7.8 1.7-14.1 9.5-14.1h7.5c7.8 0 8.8 6.3 8.8 14.1v12.8c0 7.8-1 14.1-8.8 14.1z" }),
    React.createElement("radialGradient", { id: "DosingPump_svg__c", cx: 29.897, cy: 34.723, r: 17.649, gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#616264",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#3d3d3d",
            } })),
    React.createElement("path", { fill: "url(#DosingPump_svg__c)", stroke: "#62BC46", strokeWidth: 1.606, strokeMiterlimit: 10, d: "M37.6 14.2H22.2c-3.6 0-6.5 2.9-6.5 6.5v28.1c0 3.6 2.9 6.5 6.5 6.5h15.5c3.6 0 6.5-2.9 6.5-6.5V20.7c-.1-3.6-3-6.5-6.6-6.5zm-7.4 36.5h-.4c-2.5-.1-4.2-2.8-3.3-5.2l.5-1.3 2.8-7.6c.1-.3.5-.3.6 0l2.8 7.6.5 1.3c.7 2.5-.9 5.1-3.5 5.2zM40.4 23 31 31c-.6.5-1.5.5-2.1 0l-9.4-8c-1.2-1-.5-2.9 1.1-2.9h18.8c1.5 0 2.2 1.9 1 2.9z" }),
    React.createElement("path", { fill: "none", stroke: "#4C4C4D", strokeMiterlimit: 10, d: "M58.3 42.1h-8.8V17.5c0-4.4-3.6-8-8-8H18.3c-4.4 0-8 3.6-8 8v34.4c0 4.4 3.6 8 8 8h40c2.5 0 4.5-4 4.5-8.9-.1-4.9-2.1-8.9-4.5-8.9z" }),
    React.createElement("radialGradient", { id: "DosingPump_svg__d", cx: 58.271, cy: 51.027, r: 7.036, gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#616264",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#3d3d3d",
            } })),
    React.createElement("ellipse", { fill: "url(#DosingPump_svg__d)", cx: 58.3, cy: 51, rx: 4.5, ry: 8.9 }),
    React.createElement("ellipse", { fill: "none", stroke: "#2D2D2D", strokeWidth: 0.889, strokeMiterlimit: 10, cx: 58.6, cy: 51, rx: 4.5, ry: 8.9 })));
exports.default = SvgDosingPump;
