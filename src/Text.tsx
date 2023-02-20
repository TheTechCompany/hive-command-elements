import { Box, Typography } from "@mui/material";
import React from "react";

export const Text = (props: {options: {background: string, border: boolean, bold: boolean, borderRadius: number, text: string}, children: any}) => {
    return (
        <Box sx={{
            background: props.options?.background || (props.options?.border  ? 'white' : undefined),
            paddingLeft: '6px',
            paddingRight: '6px',
            flex: 1,
            border: props.options?.border ? '1px solid black' : undefined,
            borerRadius: props.options?.borderRadius != undefined ? `${props.options?.borderRadius}px` : undefined
        }}>
            <Typography fontWeight={props.options?.bold ? 'bold' : undefined} fontSize={'small'}>{props.options?.text || props.children || "Text"}</Typography>
        </Box>
    )
}

Text.metadata = {
    width: 80,
    height: 20,    
    options: {
        bold: 'Boolean',
        background: 'String',
        text: 'String',
        border: 'Boolean',
        borderRadius: 'Number'
    }
}