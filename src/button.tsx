import React from 'react';
import { Button as ButtonUnstyled } from '@mui/material'

export interface ButtonProps {
    children?: any;
    color?: any;
    textColor?: any;
}

export const Button : React.FC<ButtonProps> = (props) => {
    return (
        <ButtonUnstyled
            variant="contained"
            color="primary"
            sx={{
                // background: props.color,
                border: 0,
                borderRadius: '0.375em',
                color: props.textColor,
                cursor: 'pointer',
                margin: '1.5em auto',
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
            }}
            >
            <span 
                style={{
                    display: 'block'
                }}
                tabIndex={-1}>{props.children || "Button"}</span>
        </ButtonUnstyled>
    )
}

(Button as any).metadata = {
    width: 125,
    height: 50,
    options: {
        children: 'String',
        textColor: 'String',
        onClick: 'Function'
    }
}