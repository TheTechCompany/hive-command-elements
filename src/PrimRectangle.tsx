import React from 'react';

export const Rectangle = (props: {options: any, width: number, height: number}) => {

    return (
        <svg>
            <rect  
                width={props?.width}
                height={props?.height}
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