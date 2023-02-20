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
const TJoin = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 283.5 283.5", xmlSpace: "preserve" }, props),
    React.createElement("path", { style: {
            fill: "#939393",
        }, d: "M189 0H0v94.5h94.5V189H189V94.5h94.5V0z" })));
exports.TJoin = TJoin;
exports.TJoin.metadata = {
    width: 60,
    height: 40,
    ports: [
        {
            key: 'left-hand',
            momentum: 0,
            x: '4%',
            y: '16%',
            rotation: 180
        },
        {
            key: 'right-hand',
            momentum: 0,
            x: '70%',
            y: '16%'
        },
        {
            key: 'bottom',
            momentum: 0,
            x: '40%',
            y: '70%'
        }
    ]
};
