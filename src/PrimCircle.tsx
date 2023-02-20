import React from 'react';

export const Circle = (props: {options: any, width: number}) => {
    return (
        <svg>
            <circle 
                stroke={props.options?.strokeColor}
                radius={props?.width} />
        </svg>
    )
}

Circle.metadata = {
    width: 50,
    height: 50,
    options: {
        strokeColor: 'String'
    }
}