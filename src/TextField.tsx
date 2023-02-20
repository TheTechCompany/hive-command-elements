import { Box, TextField as BaseTextField, TextFieldProps } from "@mui/material";
import React from "react";

export const TextField = (props: { options: { onChange: (value: any) => void, type: string, label: string, value: Date } }) => {
    return (
        <Box sx={{flex: 1, display: 'flex'}}>
            <BaseTextField
                size="small"
                fullWidth
                onChange={(e) => props.options?.onChange?.(e.target.value)} 
                value={props.options?.value} 
                type={props.options?.type}
                label={props.options?.label} />
        </Box>
    )
}

TextField.metadata = {
    width: 150,
    height: 50,
    options: {
        onChange: 'Function',
        value: 'String',
        type: 'String',
        label: 'String'
    }
}