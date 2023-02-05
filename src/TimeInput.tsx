import { Box, TextField, TextFieldProps } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers"
import React from "react";

export const TimeInput = (props: { options: { onChange: () => void, value: Date } }) => {
    return (
        <Box>
            <TimePicker 
                onChange={props.options?.onChange} 
                value={props.options?.value} 
                renderInput={(params) => <TextField size="small" {...params} />} />
        </Box>
    )
}

TimeInput.metadata = {
    options: {
        onChange: 'Function',
        value: 'Date'
    }
}