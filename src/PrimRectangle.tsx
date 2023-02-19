import React from 'react';

export const Rectangle = (props: {options: any}) => {
    return (
        <rect  
            strokeWidth={props.options?.strokeWidth}
            stroke={props.options?.strokeColor}
            strokeLinejoin={props.options?.strokeLineJoin}
            />
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