import { Box, TextField, TextFieldProps } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers"
import React from "react";

export const DateInput = (props: any) => {
    return (
        <Box>
            <DatePicker 
                onChange={props.onChange} 
                value={props.value} 
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