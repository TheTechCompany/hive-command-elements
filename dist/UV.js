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
exports.UV = void 0;
const React = __importStar(require("react"));
const UV = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", id: "uv_svg__Layer_1", x: 0, y: 0, viewBox: "0 0 165.4 45.3" }, props),
    React.createElement("style", null, ".uv_svg__st1{fill:#4d4d4e}"),
    React.createElement("linearGradient", { id: "uv_svg__SVGID_1_", x1: 75.411, x2: 75.411, y1: 14.88, y2: 44.88, gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#393839",
            } }),
        React.createElement("stop", { offset: 0.5, style: {
                stopColor: "#7e7f81",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#393839",
            } })),
    React.createElement("path", { d: "M146.9 44.9H3.9C2 44.9.4 43.3.4 41.4v-23c0-1.9 1.6-3.5 3.5-3.5h143c1.9 0 3.5 1.6 3.5 3.5v23c0 1.9-1.6 3.5-3.5 3.5z", style: {
            fill: "url(#uv_svg__SVGID_1_)",
        } }),
    React.createElement("path", { d: "M6.27 14.902v-10h17.6v10z", className: "uv_svg__st1" }),
    React.createElement("linearGradient", { id: "uv_svg__SVGID_00000114042839260797354350000001853898132272339639_", x1: 0.411, x2: 30.411, y1: 2.614, y2: 2.614, gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#393839",
            } }),
        React.createElement("stop", { offset: 0.5, style: {
                stopColor: "#7e7f81",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#393839",
            } })),
    React.createElement("path", { d: "M30.4 2.6c0-1.2-1-2.2-2.2-2.2H2.6C1.4.4.4 1.4.4 2.6c0 1.2 1 2.2 2.2 2.2h25.5c1.3.1 2.3-.9 2.3-2.2z", style: {
            fill: "url(#uv_svg__SVGID_00000114042839260797354350000001853898132272339639_)",
        } }),
    React.createElement("path", { d: "M150.4 20.7h10v17.6h-10z", className: "uv_svg__st1" }),
    React.createElement("linearGradient", { id: "uv_svg__SVGID_00000170243620128869902510000018192573999936894911_", x1: 162.677, x2: 162.677, y1: 14.88, y2: 44.88, gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#393839",
            } }),
        React.createElement("stop", { offset: 0.5, style: {
                stopColor: "#7e7f81",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#393839",
            } })),
    React.createElement("path", { d: "M162.7 44.9c1.2 0 2.2-1 2.2-2.2V17.1c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v25.5c-.1 1.3.9 2.3 2.2 2.3z", style: {
            fill: "url(#uv_svg__SVGID_00000170243620128869902510000018192573999936894911_)",
        } })));
exports.UV = UV;
exports.UV.metadata = {
    type: 'uv',
    width: 150,
    height: 50,
    ports: [
        {
            key: 'inlet',
            momentum: 1,
            x: '9%',
            y: '5%',
        },
        {
            key: 'outlet',
            momentum: -1,
            x: '100%',
            y: '55%'
        }
    ]
};
