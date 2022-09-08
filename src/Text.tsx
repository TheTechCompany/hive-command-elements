import { Typography } from "@mui/material";
import React from "react";

export const Text = (props: any) => {
    return (
        <Typography>{props.children || "Text"}</Typography>
    )
}

Text.metadata = {
    options: {
        border: 'Boolean',
        borderRadius: 'Number'
    }
}