import React from 'react';

export const Rectangle = (props: {options: any}) => {

    console.log("Rectangle", props)
    return (
        <svg>
            <rect  
                strokeWidth={props.options?.strokeWidth}
                stroke={props.options?.strokeColor}
                strokeLinejoin={props.options?.strokeLineJoin}
                />
        </svg>
    )
}

Rectangle.metadata = {
    width: 50,
    height: 50,
    options: {
        strokeWidth: 'Number',
        strokeColor: 'String',
        strokeLineJoin: 'String'
    }
}