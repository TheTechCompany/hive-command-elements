import { Box, Typography } from "@mui/material";
import React from "react";

export const Text = (props: {options: {border: boolean, borderRadius: number, text: string}, children: any}) => {
    return (
        <Box sx={{
            border: props.options?.border ? '1px solid black' : undefined,
            borerRadius: props.options?.borderRadius != undefined ? `${props.options?.borderRadius}px` : undefined
        }}>
            <Typography fontSize={'small'}>{props.options?.text || props.children || "Text"}</Typography>
        </Box>
    )
}

Text.metadata = {
    width: '100',
    height: '20',    
    options: {
        text: 'String',
        border: 'Boolean',
        borderRadius: 'Number'
    }
}