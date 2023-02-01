import { Box, Typography } from "@mui/material";
import React from "react";

export const Text = (props: any) => {
    return (
        <Box sx={{
            border: props.border ? '1px solid black' : undefined,
            borerRadius: props.borderRadius != undefined ? `${props.borderRadius}px` : undefined
        }}>
            <Typography>{props.text || props.children || "Text"}</Typography>
        </Box>
    )
}

Text.metadata = {
    options: {
        text: 'String',
        border: 'Boolean',
        borderRadius: 'Number'
    }
}