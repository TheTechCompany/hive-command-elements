import { Box, TextField, TextFieldProps } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers"
import React from "react";

export const DateInput = (props: { options: { onChange?: (date: Date) => void, value: Date } }) => {
    return (
        <Box>
            <DatePicker 
                onChange={(value) => value && props.options?.onChange?.(value)} 
                value={props.options?.value} 
                renderInput={(params) => <TextField size="small" {...params} />} />
        </Box>
    )
}

DateInput.metadata = {
    width: 100,
    height: 50,
    options: {
        onChange: 'Function',
        value: 'Date'
    }
}