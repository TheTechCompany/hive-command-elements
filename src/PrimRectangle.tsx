import React from 'react';

export const Rectangle = (props: {options: any, width: number, height: number}) => {

    return (
        <svg width={props.width} height={props.height}>
            <rect  
                fill={props.options?.fill || 'none'}
                width={props?.width}
                height={props?.height}
                strokeWidth={props.options?.strokeWidth}
                stroke={props.options?.strokeColor || (!props.options?.fill ? 'black' : undefined)}
                rx={props.options?.strokeLineJoin}
                ry={props.options?.rounded}
                />
        </svg>
    )
}

Rectangle.metadata = {
    width: 50,
    height: 50,
    options: {
        fill: 'String',
        strokeWidth: 'Number',
        strokeColor: 'String',
        rounded: 'Number'
    }
}