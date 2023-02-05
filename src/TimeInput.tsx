import { Box, TextField, TextFieldProps } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers"
import React from "react";

export const TimeInput = (props: { options: { onChange: (value: Date) => void, value: Date } }) => {
    return (
        <Box>
            <TimePicker 
                onChange={(value) => value && props.options?.onChange?.(value)} 
                value={props.options?.value} 
                renderInput={(params) => <TextField size="small" {...params} />} />
        </Box>
    )
}

TimeInput.metadata = {
    width: 100,
    height: 50,
    options: {
        onChange: 'Function',
        value: 'Date'
    }
}