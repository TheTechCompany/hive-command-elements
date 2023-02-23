import { Box, IconButton, InputAdornment, TextField as BaseTextField, TextFieldProps } from "@mui/material";
import { Check } from '@mui/icons-material';
import React, { useEffect, useState } from "react";

export const TextField = (props: { options: { onChange: (value: any) => void, type: string, label: string, value: any } }) => {
    
    const [ value, setValue ] = useState(props.options?.value)

    useEffect(() => {
        setValue(props.options?.value)
    }, [props.options?.value])

    const changeValue = () => {
        console.log("Change value")
        props.options?.onChange?.(value)
    }

    return (
        <Box sx={{flex: 1, display: 'flex'}}>
            <BaseTextField
                size="small"
                fullWidth
                onChange={(e) => { setValue(e.target.value) }}
                value={value || null} 
                type={props.options?.type}
                InputProps={{
                    endAdornment: value != props.options?.value ? <InputAdornment position="end">
                        <IconButton onClick={() => changeValue()} size="small">
                            <Check fontSize="inherit" />
                        </IconButton>
                </InputAdornment> : undefined
                }}
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