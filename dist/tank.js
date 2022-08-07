"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tank = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const sump_1 = __importDefault(require("./sump"));
// export default () => {
//     return (
//         <div style={{display: "flex", flexDirection: 'column'}}>
//             Tank
//             <div style={{width: 100, height: 20, background: "green"}}>
//                 <div style={{width: 50, height: 10, background: "red"}}/>
//             </div>
//         </div
//     );
// }
const Tank = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(sump_1.default, null),
        react_1.default.createElement(material_1.Button, null),
        "Tanks"));
};
exports.Tank = Tank;
