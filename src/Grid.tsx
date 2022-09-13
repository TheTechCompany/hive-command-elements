import React from "react";
import { Grid as MuiGrid } from '@mui/material'

/*
    props
    - editing : bool
*/
export const Grid = (props: any) => {

    const renderItem = (row: number, col: number) => {
        if(props.editing){
            return (
                <div 
                    onDrop={(evt) => {
                        let data = JSON.parse(evt.dataTransfer.getData('infinite-canvas'))
                       
                        console.log("Data from grid cell", {row, col});
                        // let pos = getRelativeCanvasPos(canvasRef, {offset: _offset, zoom: _zoom}, {x: e.clientX, y: e.clientY})
                        // onNodeCreate(pos, data)
                        // isDragging.current.dragging = false
                    }}
                    style={{border: '1px solid black'}}>
                    {props.items?.find((a: any) => a.row == row && a.col == col)}
                </div>
            )
        }else{
            return props.items?.find((a: any) => a.row == row && a.col == col);
        }
    }

    
    return (
        <MuiGrid container spacing={2}>
            {Array.from(new Array(props.rows * props.cols)).map((x, ix) => {
                let row = Math.floor(ix / props.cols);
                let col = ix % props.cols;

                return (
                    <MuiGrid item xs={props.cellSize}>
                        {renderItem(row, col)}
                    </MuiGrid>
                )
            })}
        </MuiGrid>
    )
}

Grid.metadata = {
    options: {
        cellSize: 'Number',
        rows: 'Number',
        cols: 'Number',
        items: 'Array'
    }
}