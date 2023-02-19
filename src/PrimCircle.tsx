import React from 'react';

export const Circle = (props: {options: any}) => {
    console.log("Circle", {props});

    return (
        <svg>
            <circle 
                stroke={props.options?.strokeColor}
                radius={props.options?.radius} />
        </svg>
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