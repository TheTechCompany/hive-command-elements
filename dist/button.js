"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const Button = (props) => {
    return (react_1.default.createElement(material_1.Button, { variant: "contained", fullWidth: true, color: "primary", onClick: props.onClick, sx: {
            height: '100%',
            // background: props.color,
            border: 0,
            borderRadius: '0.375em',
            color: props.textColor,
            cursor: 'pointer',
            // margin: '1.5em auto',
            padding: '0.5em 1em',
            textShadow: `0 0 0.1em white`,
            transition: `box-shadow 0.2s linear`,
            boxShadow: `
                    inset 0 -2px 0 rgba(200, 200, 200, 1)
                `,
            '&:hover': {
            // opacity: '0.8'
            },
            '&:active': {
                boxShadow: `unset`
            }
        } },
        react_1.default.createElement("span", { style: {
                display: 'block'
            }, tabIndex: -1 }, props.text || "Button")));
};
exports.Button = Button;
exports.Button.metadata = {
    width: 125,
    height: 50,
    options: {
        text: 'String',
        textColor: 'String',
        onClick: 'Function'
    }
};
