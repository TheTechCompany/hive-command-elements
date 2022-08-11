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
exports.Sump = void 0;
const React = __importStar(require("react"));
const Sump = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 90.2 89", xmlSpace: "preserve" }, props),
    React.createElement("linearGradient", { id: "sump_svg__a", gradientUnits: "userSpaceOnUse", x1: 687.398, y1: -1162.866, x2: 687.398, y2: -1189.141, gradientTransform: "matrix(0 1 1 0 1206.31 -659.043)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#616264",
            } }),
        React.createElement("stop", { offset: 0.532, style: {
                stopColor: "#8d8c8e",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616264",
            } })),
    React.createElement("path", { fill: "url(#sump_svg__a)", d: "M17.2 48s26.3-.5 26.3-26.3V8.6H17.2V48z" }),
    React.createElement("linearGradient", { id: "sump_svg__b", gradientUnits: "userSpaceOnUse", x1: 2483.772, y1: 78.754, x2: 2483.772, y2: 49.83, gradientTransform: "matrix(-1 0 0 1 2527.218 0)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#616264",
            } }),
        React.createElement("stop", { offset: 0.532, style: {
                stopColor: "#8d8c8e",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616264",
            } })),
    React.createElement("path", { fill: "url(#sump_svg__b)", d: "M65.1 73.4 45.9 51c-1.3-1.5-3.7-1.5-5 0L21.8 73.4c-1.8 2.1-.3 5.4 2.5 5.4h38.4c2.7 0 4.2-3.3 2.4-5.4z" }),
    React.createElement("radialGradient", { id: "sump_svg__c", cx: 707.079, cy: -1162.863, r: 26.275, gradientTransform: "matrix(0 1 1 0 1206.31 -659.043)", gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#616264",
            } }),
        React.createElement("stop", { offset: 0.541, style: {
                stopColor: "#8d8c8e",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616264",
            } })),
    React.createElement("circle", { fill: "url(#sump_svg__c)", cx: 43.4, cy: 48, r: 26.3 }),
    React.createElement("path", { fill: "none", stroke: "#4C4C4D", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M60.5 68.3c5.6-4.8 9.2-12 9.2-20C69.7 33.8 58 22 43.4 22V8.9H17.2v39.4c0 8 3.6 15.1 9.2 20l-4.6 5.4c-1.8 2-.3 5.3 2.5 5.3h38.4c2.8 0 4.3-3.3 2.5-5.4l-4.7-5.3z" }),
    React.createElement("circle", { opacity: 0.33, fill: "#44B2E5", cx: 43.4, cy: 48, r: 15.5 }),
    React.createElement("radialGradient", { id: "sump_svg__d", cx: 43.446, cy: 48.036, r: 17.59, gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#616264",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#3d3d3d",
            } })),
    React.createElement("path", { fill: "url(#sump_svg__d)", stroke: "#57C9E8", strokeWidth: 1.313, strokeMiterlimit: 10, d: "M48.5 31.2c-13.6-3.8-25.8 8.3-22 22 1.6 5.7 6.1 10.2 11.8 11.8 13.6 3.8 25.8-8.3 22-22-1.6-5.7-6.1-10.2-11.8-11.8zm-4.6 29h-.8c-4.4-.3-7.3-4.9-5.8-9l.8-2.3 4.8-13.3c.2-.5.8-.5 1 0l4.8 13.3.8 2.3c1.6 4.1-1.2 8.7-5.6 9z" })));
exports.Sump = Sump;
