import React from 'react';

export const Circle = (props: {options: any}) => {
    console.log("Circle", {props});

    return (
        <circle 
            stroke={props.options?.strokeColor}
            radius={props.options?.radius} />
    )
}

Circle.metadata = {
    width: 50,
    height: 50,
    options: {
        radius: 'Number',
        strokeColor: 'String'
    }
}