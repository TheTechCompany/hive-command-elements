import React from "react";
import { Grid as MuiGrid } from '@mui/material'

export const Grid = (props: any) => {
    return (
        <MuiGrid container spacing={2}>
            {props.items.map((item: any) => (
                <MuiGrid item xs={props.cellSize}>
                    {item}
                </MuiGrid>
            ))}
        </MuiGrid>
    )
}

Grid.metadata = {
    options: {
        cellSize: 'Number',
        items: 'Array'
    }
}