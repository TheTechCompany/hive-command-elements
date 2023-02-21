import { Box, TextField, TextFieldProps } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers"
import React from "react";

export const TimeInput = (props: { options: { onChange: (value: Date) => void, label: string, value: Date } }) => {
    return (
        <Box sx={{flex: 1, display: 'flex'}}>
            <TimePicker 
                onChange={(value) => value && props.options?.onChange?.(value)} 
                value={props.options?.value} 
                renderInput={(params) => <TextField fullWidth label={props.options?.label} size="small" {...params} />} />
        </Box>
    )
}

TimeInput.metadata = {
    width: 150,
    height: 50,
    options: {
        onChange: 'Function',
        value: 'Date',
        label: 'String'
    }
}