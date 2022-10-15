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
exports.Tank = void 0;
const React = __importStar(require("react"));
const Tank = (props) => (React.createElement("svg", Object.assign({ id: "tank_sq_md_svg__Layer_1", xmlns: "http://www.w3.org/2000/svg", x: 0, y: 0, viewBox: "0 0 320.2 199", style: {
    //   enableBackground: "new 0 0 320.2 199",
    }, xmlSpace: "preserve", role: "img" }, props),
    React.createElement("style", null, ".tank_sq_md_svg__st5{fill:none;stroke:#383739;stroke-width:1.8221;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"),
    React.createElement("linearGradient", { id: "tank_sq_md_svg__SVGID_1_", gradientUnits: "userSpaceOnUse", x1: 232.9, y1: 38.3, x2: 251.6, y2: 38.3, gradientTransform: "matrix(1 0 0 -1 0 200)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#6a6b6d",
            } }),
        React.createElement("stop", { offset: 0.5, style: {
                stopColor: "#a8abac",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#6a6b6d",
            } })),
    React.createElement("linearGradient", { id: "tank_sq_md_svg__SVGID_2_", gradientUnits: "userSpaceOnUse", x1: 242.25, y1: 12.823, x2: 242.25, y2: 63.777, gradientTransform: "matrix(1 0 0 -1 0 200)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#383739",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#383838",
            } })),
    React.createElement("path", { d: "M251.6 176.3v-39.5h-18.7v39.5c0 5.7 4.2 10.3 9.3 10.3 5.2 0 9.4-4.6 9.4-10.3z", style: {
            fill: "url(#tank_sq_md_svg__SVGID_1_)",
            stroke: "url(#tank_sq_md_svg__SVGID_2_)",
            strokeWidth: 1.1538,
            strokeMiterlimit: 10,
        } }),
    React.createElement("linearGradient", { id: "tank_sq_md_svg__SVGID_3_", gradientUnits: "userSpaceOnUse", x1: 62.968, y1: 37.3, x2: 81.668, y2: 37.3, gradientTransform: "matrix(1 0 0 -1 0 200)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#6a6b6d",
            } }),
        React.createElement("stop", { offset: 0.5, style: {
                stopColor: "#a8abac",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#6a6b6d",
            } })),
    React.createElement("linearGradient", { id: "tank_sq_md_svg__SVGID_4_", gradientUnits: "userSpaceOnUse", x1: 72.35, y1: 11.823, x2: 72.35, y2: 62.777, gradientTransform: "matrix(1 0 0 -1 0 200)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#383739",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#383838",
            } })),
    React.createElement("path", { d: "M81.7 177.3v-39.5H63v39.5c0 5.7 4.2 10.3 9.3 10.3 5.2 0 9.4-4.6 9.4-10.3z", style: {
            fill: "url(#tank_sq_md_svg__SVGID_3_)",
            stroke: "url(#tank_sq_md_svg__SVGID_4_)",
            strokeWidth: 1.1538,
            strokeMiterlimit: 10,
        } }),
    React.createElement("radialGradient", { id: "tank_sq_md_svg__SVGID_5_", cx: 385.733, cy: -8.122, r: 230.927, fx: 218.764, fy: -50.244, gradientTransform: "matrix(-.9929 .01912 .01477 .7181 542.464 81.507)", gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { offset: 0.043, style: {
                stopColor: "#787a7c",
            } }),
        React.createElement("stop", { offset: 0.315, style: {
                stopColor: "#8e9192",
            } }),
        React.createElement("stop", { offset: 0.475, style: {
                stopColor: "#999c9e",
            } }),
        React.createElement("stop", { offset: 0.537, style: {
                stopColor: "#989a9c",
            } }),
        React.createElement("stop", { offset: 0.662, style: {
                stopColor: "#88888b",
            } }),
        React.createElement("stop", { offset: 0.861, style: {
                stopColor: "#383838",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616365",
            } })),
    React.createElement("path", { d: "M278 156.7H40.7c-16.3 0-29.4-13.2-29.4-29.4V38.8c0-16.3 13.2-29.4 29.4-29.4H278c16.3 0 29.4 13.2 29.4 29.4v88.5c.1 16.3-13.1 29.4-29.4 29.4z", style: {
            fill: "url(#tank_sq_md_svg__SVGID_5_)",
        } }),
    React.createElement("linearGradient", { id: "tank_sq_md_svg__SVGID_6_", gradientUnits: "userSpaceOnUse", x1: 159.35, y1: 190.6, x2: 159.35, y2: 43.3, gradientTransform: "matrix(1 0 0 -1 0 200)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#a8abac",
            } }),
        React.createElement("stop", { offset: 0.379, style: {
                stopColor: "#7d7f80",
            } }),
        React.createElement("stop", { offset: 0.437, style: {
                stopColor: "#717374",
            } }),
        React.createElement("stop", { offset: 0.524, style: {
                stopColor: "#656769",
            } }),
        React.createElement("stop", { offset: 0.613, style: {
                stopColor: "#616365",
            } }),
        React.createElement("stop", { offset: 0.808, style: {
                stopColor: "#7d7f80",
            } }),
        React.createElement("stop", { offset: 0.828, style: {
                stopColor: "#868889",
            } }),
        React.createElement("stop", { offset: 0.884, style: {
                stopColor: "#999b9c",
            } }),
        React.createElement("stop", { offset: 0.942, style: {
                stopColor: "#a4a7a8",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#a8abac",
            } })),
    React.createElement("path", { d: "M278 156.7H40.7c-16.3 0-29.4-13.2-29.4-29.4V38.8c0-16.3 13.2-29.4 29.4-29.4H278c16.3 0 29.4 13.2 29.4 29.4v88.5c.1 16.3-13.1 29.4-29.4 29.4z", style: {
            fill: "url(#tank_sq_md_svg__SVGID_6_)",
        } }),
    React.createElement("linearGradient", { id: "tank_sq_md_svg__SVGID_7_", gradientUnits: "userSpaceOnUse", x1: 159.35, y1: 156.7, x2: 159.35, y2: 9.4 },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#7d7f80",
            } }),
        React.createElement("stop", { offset: 0.315, style: {
                stopColor: "#a8abac",
            } }),
        React.createElement("stop", { offset: 0.495, style: {
                stopColor: "#a8abac",
            } }),
        React.createElement("stop", { offset: 0.825, style: {
                stopColor: "#7d7f80",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616365",
            } })),
    React.createElement("path", { d: "M278 21.4c9.6 0 17.4 7.8 17.4 17.4v88.5c0 4.6-1.7 8.9-5 12.2-3.3 3.3-7.7 5.1-12.4 5.1H40.7c-9.6 0-17.4-7.8-17.4-17.4V38.8c0-9.6 7.8-17.4 17.4-17.4H278m0-12H40.7c-16.2 0-29.4 13.1-29.4 29.4v88.5c0 16.2 13.1 29.4 29.4 29.4H278c16.3 0 29.5-13.1 29.4-29.4V38.8c0-16.2-13.1-29.4-29.4-29.4z", style: {
            fill: "url(#tank_sq_md_svg__SVGID_7_)",
        } }),
    React.createElement("path", { className: "tank_sq_md_svg__st5", d: "M278 156.7H40.7c-16.3 0-29.4-13.2-29.4-29.4V38.8c0-16.3 13.2-29.4 29.4-29.4H278c16.3 0 29.4 13.2 29.4 29.4v88.5c.1 16.3-13.1 29.4-29.4 29.4z" }),
    React.createElement("linearGradient", { id: "tank_sq_md_svg__SVGID_8_", gradientUnits: "userSpaceOnUse", x1: 720.482, y1: 212.4, x2: 720.482, y2: 62.2, gradientTransform: "matrix(1 0 0 -1 0 200)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#919495",
            } }),
        React.createElement("stop", { offset: 0.315, style: {
                stopColor: "#a8abac",
            } }),
        React.createElement("stop", { offset: 0.495, style: {
                stopColor: "#a8abac",
            } }),
        React.createElement("stop", { offset: 0.825, style: {
                stopColor: "#7d7f80",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616365",
            } })),
    React.createElement("path", { d: "M791.2 137.8H649.6c-41.5 0-75.1-33.6-75.1-75.1 0-41.5 33.6-75.1 75.1-75.1h141.7c41.5 0 75.1 33.6 75.1 75.1-.1 41.5-33.7 75.1-75.2 75.1z", style: {
            fill: "url(#tank_sq_md_svg__SVGID_8_)",
        } }),
    React.createElement("path", { className: "tank_sq_md_svg__st5", d: "M277 143.7H42c-10.5 0-19-8.5-19-19V40.5c0-10.5 8.5-19 19-19h235c10.5 0 19 8.5 19 19v84.3c0 10.4-8.5 18.9-19 18.9z" }),
    React.createElement("linearGradient", { id: "tank_sq_md_svg__SVGID_9_", gradientUnits: "userSpaceOnUse", x1: 157.608, y1: 143.233, x2: 157.608, y2: 53.108 },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#7d7f80",
            } }),
        React.createElement("stop", { offset: 0.315, style: {
                stopColor: "#a8abac",
            } }),
        React.createElement("stop", { offset: 0.495, style: {
                stopColor: "#a8abac",
            } }),
        React.createElement("stop", { offset: 0.825, style: {
                stopColor: "#7d7f80",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616365",
            } })),
    React.createElement("path", { style: {
            fill: "url(#tank_sq_md_svg__SVGID_9_)",
        }, d: "M153.2 53.1h8.8v90.1h-8.8z" }),
    React.createElement("path", { d: "M161.5 53.6v89.1h-7.7V53.6h7.7m1-1h-9.7v91.1h9.7V52.6z", style: {
            fill: "#383739",
        } })));
exports.Tank = Tank;
exports.Tank.metadata = {
    width: 200,
    height: 50,
    type: 'tank'
};
