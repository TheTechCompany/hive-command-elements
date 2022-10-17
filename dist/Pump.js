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
exports.Pump = void 0;
const React = __importStar(require("react"));
const Pump = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", xmlSpace: "preserve" }, props),
    React.createElement("linearGradient", { id: "pump_svg__a", gradientUnits: "userSpaceOnUse", x1: 1680.754, y1: -633.181, x2: 1680.754, y2: -591.601, gradientTransform: "rotate(180 860.603 -270)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#616264",
            } }),
        React.createElement("stop", { offset: 0.532, style: {
                stopColor: "#a0a0a0",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616264",
            } })),
    React.createElement("path", { fill: "url(#pump_svg__a)", d: "m71.54 85.47-27.6-32.2c-1.87-2.16-5.32-2.16-7.19 0L9.3 85.47c-2.59 3.02-.43 7.76 3.59 7.76h55.2c3.88 0 6.18-4.74 3.45-7.76z" }),
    React.createElement("radialGradient", { id: "pump_svg__b", cx: 1680.715, cy: -589.102, r: 37.806, gradientTransform: "rotate(180 860.603 -270)", gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#616264",
            } }),
        React.createElement("stop", { offset: 0.541, style: {
                stopColor: "#a0a0a0",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616264",
            } })),
    React.createElement("circle", { fill: "url(#pump_svg__b)", cx: 40.49, cy: 49.1, r: 37.81 }),
    React.createElement("linearGradient", { id: "pump_svg__c", gradientUnits: "userSpaceOnUse", x1: 1652.468, y1: -589.102, x2: 1652.468, y2: -551.296, gradientTransform: "rotate(180 860.603 -270)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#616264",
            } }),
        React.createElement("stop", { offset: 0.532, style: {
                stopColor: "#a0a0a0",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616264",
            } })),
    React.createElement("path", { fill: "url(#pump_svg__c)", d: "M40.49 11.3s.72 37.81 37.81 37.81h18.69V11.3h-56.5z" }),
    React.createElement("path", { fill: "none", stroke: "#4C4C4D", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M40.49 11.3c-20.84 0-37.81 16.96-37.81 37.8 0 11.5 5.17 21.71 13.22 28.75l-6.6 7.62c-2.59 3.02-.43 7.76 3.59 7.76h55.2c4.03 0 6.18-4.74 3.59-7.76l-6.61-7.62C73.12 70.95 78.3 60.6 78.3 49.1h18.69V11.3h-56.5z" }),
    React.createElement("path", { fill: "#333", d: "M48.18 24.81c-19.55-5.46-37.09 11.93-31.62 31.62 2.3 8.19 8.77 14.66 16.96 16.96 19.55 5.46 37.09-11.93 31.62-31.62-2.3-8.19-8.77-14.66-16.96-16.96zM41.42 66.5h-1.14c-6.32-.43-10.49-7.04-8.34-12.94l1.15-3.31 6.9-19.12c.29-.72 1.15-.72 1.44 0l6.9 19.12 1.15 3.31c2.44 5.89-1.59 12.5-8.06 12.94z" })));
exports.Pump = Pump;
exports.Pump.metadata = {
    width: 50,
    height: 50,
    type: 'pump',
    ports: [
        {
            key: 'outlet',
            momentum: 1,
            x: '95%',
            y: '34%',
            rotation: 180
        },
        {
            key: 'inlet',
            momentum: -1,
            x: '-14%',
            y: '55%'
        }
    ]
};
