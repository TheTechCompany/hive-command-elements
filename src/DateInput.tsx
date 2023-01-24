import { Box, TextField, TextFieldProps } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers"
import React from "react";

export const DateInput = (props: any) => {
    return (
        <Box>
            <DateTimePicker 
                onChange={props.onChange} 
                value={props.value} 
                renderInput={(params) => <TextField {...params} />} />
        </Box>
    )
}

DateInput.metadata = {
    options: {
        onChange: 'Function',
        value: 'Date'
    }
}