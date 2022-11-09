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
exports.TJoin = void 0;
const React = __importStar(require("react"));
const TJoin = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 93.9 58.4", xmlSpace: "preserve" }, props),
    React.createElement("linearGradient", { id: "TJOIN_svg__a", gradientUnits: "userSpaceOnUse", x1: 36.798, y1: 26.203, x2: 56.898, y2: 26.203, gradientTransform: "matrix(1 0 0 -1 0 60.406)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#6f7173",
            } }),
        React.createElement("stop", { offset: 0.501, style: {
                stopColor: "#d3d5d6",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#6f7173",
            } })),
    React.createElement("path", { style: {
            fill: "url(#TJOIN_svg__a)",
        }, d: "M36.8 51.7h20l.1-25-10-10-10 10z" }),
    React.createElement("linearGradient", { id: "TJOIN_svg__b", gradientUnits: "userSpaceOnUse", x1: 46.104, y1: 33.703, x2: 46.104, y2: 53.703, gradientTransform: "matrix(1 0 0 -1 0 60.406)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#6f7173",
            } }),
        React.createElement("stop", { offset: 0.501, style: {
                stopColor: "#d3d5d6",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#6f7173",
            } })),
    React.createElement("path", { d: "M15.2 26.7h21.7l10-10 10 10H77v-20H15.2v20z", style: {
            fill: "url(#TJOIN_svg__b)",
        } })));
exports.TJoin = TJoin;
exports.TJoin.metadata = {
    width: 60,
    height: 40,
    ports: [
        {
            key: 'left-hand',
            momentum: 0,
            x: '4%',
            y: '15%',
            rotation: 180
        },
        {
            key: 'right-hand',
            momentum: 0,
            x: '70%',
            y: '14%'
        },
        {
            key: 'bottom',
            momentum: 0,
            x: '40%',
            y: '70%'
        }
    ]
};
