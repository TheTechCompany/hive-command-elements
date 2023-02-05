import { Box, TextField, TextFieldProps } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers"
import React from "react";

export const TimeInput = (props: any) => {
    return (
        <Box>
            <TimePicker 
                onChange={props.onChange} 
                value={props.value} 
                renderInput={(params) => <TextField {...params} />} />
        </Box>
    )
}

TimeInput.metadata = {
    options: {
        onChange: 'Function',
        value: 'Date'
    }
}