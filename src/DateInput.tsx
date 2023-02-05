import { Box, TextField, TextFieldProps } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers"
import React from "react";

export const DateInput = (props: { options: { onChange: () => void, value: Date } }) => {
    return (
        <Box>
            <DatePicker 
                onChange={props.options?.onChange} 
                value={props.options?.value} 
                renderInput={(params) => <TextField size="small" {...params} />} />
        </Box>
    )
}

DateInput.metadata = {
    options: {
        onChange: 'Function',
        value: 'Date'
    }
}