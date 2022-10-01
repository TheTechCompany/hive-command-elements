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
const Sump = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", xmlSpace: "preserve" }, props),
    React.createElement("linearGradient", { id: "sump_svg__a", gradientUnits: "userSpaceOnUse", x1: 905.587, y1: 835.76, x2: 905.587, y2: 871.419, gradientTransform: "rotate(90 880.029 3.633)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#616264",
            } }),
        React.createElement("stop", { offset: 0.532, style: {
                stopColor: "#a0a0a0",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616264",
            } })),
    React.createElement("path", { fill: "url(#sump_svg__a)", d: "M12.25 55.9s35.66-.68 35.66-35.66V2.48H12.25V55.9z" }),
    React.createElement("linearGradient", { id: "sump_svg__b", gradientUnits: "userSpaceOnUse", x1: 1673.3, y1: -637.615, x2: 1673.3, y2: -598.397, gradientTransform: "rotate(180 860.603 -270)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#616264",
            } }),
        React.createElement("stop", { offset: 0.532, style: {
                stopColor: "#a0a0a0",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616264",
            } })),
    React.createElement("path", { fill: "url(#sump_svg__b)", d: "M77.33 90.34 51.29 59.97c-1.76-2.03-5.02-2.03-6.78 0L18.48 90.34c-2.44 2.85-.41 7.32 3.39 7.32h52.06c3.8 0 5.84-4.47 3.4-7.32z" }),
    React.createElement("radialGradient", { id: "sump_svg__c", cx: 932.3, cy: 835.757, r: 35.659, gradientTransform: "rotate(90 880.029 3.633)", gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#616264",
            } }),
        React.createElement("stop", { offset: 0.541, style: {
                stopColor: "#a0a0a0",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616264",
            } })),
    React.createElement("circle", { fill: "url(#sump_svg__c)", cx: 47.9, cy: 55.9, r: 35.66 }),
    React.createElement("path", { fill: "none", stroke: "#4C4C4D", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M71.09 83.43c7.59-6.51 12.47-16.27 12.47-27.12 0-19.66-16-35.66-35.66-35.66V2.89H12.25v53.42c0 10.85 4.88 20.47 12.47 27.12l-6.24 7.32c-2.44 2.85-.41 7.32 3.39 7.32h52.06c3.8 0 5.83-4.47 3.39-7.32l-6.23-7.32z" }),
    React.createElement("path", { fill: "#333", d: "M54.82 33.13c-18.44-5.15-34.98 11.25-29.83 29.83 2.17 7.73 8.27 13.83 16 16 18.44 5.15 34.98-11.25 29.83-29.83-2.17-7.73-8.27-13.83-16-16zm-6.37 39.32h-1.08c-5.97-.41-9.9-6.64-7.86-12.2l1.08-3.12L47.1 39.1c.27-.68 1.08-.68 1.36 0l6.51 18.03 1.08 3.12c2.29 5.55-1.5 11.79-7.6 12.2z" })));
exports.Sump = Sump;
exports.Sump.metadata = {
    width: 66,
    height: 66
};
