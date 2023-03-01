import * as React from "react";
import { SVGProps } from "react";

export const Fan = (props: any) => (
  <svg
    onClick={props.options?.onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 283.46 283.46"
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="M140.7 47.27c-56.43 0-102.18 45.75-102.18 102.18H2.84v102.18h139.22l-.05-.03c55.82-.71 100.86-46.16 100.86-102.15h37.04V47.27H140.7zm64.32 64.96c-37.22-10.12-43.28 25.08-43.28 25.08s-4.06-8.09-14.55-10.93c3.25-49.34 27.1-43.69 27.1-43.69s15.74 4.06 30.73 29.54zm-48.96 37.22c0 8.49-6.88 15.36-15.36 15.36-8.49 0-15.36-6.88-15.36-15.36 0-8.49 6.88-15.36 15.36-15.36s15.36 6.88 15.36 15.36zm-21.42 22.64c-3.25 49.34-27.1 43.69-27.1 43.69s-15.77-4.06-30.73-29.54c37.22 10.12 43.28-25.08 43.28-25.08s4.05 8.09 14.55 10.93zM99.85 87.13s11.33-11.71 40.85-11.71c-27.1 27.1 0 50.15 0 50.15s-9.31-.41-16.58 6.87c-41.26-27.51-24.27-45.31-24.27-45.31zm-23.05 25.1c9.71 37.22 43.28 25.08 43.28 25.08s-4.84 7.68-2.44 17.8c-44.5 21.83-51.37-1.62-51.37-1.62s-4.05-15.37 10.53-41.26zm104.74 99.11s-10.9 11.71-40.85 11.71c27.1-27.1 0-50.15 0-50.15s9.31.41 16.58-6.87c41.26 27.52 24.27 45.31 24.27 45.31zm23.48-25.1c-9.71-37.22-43.28-25.08-43.28-25.08s4.84-7.68 2.44-17.8c44.5-21.83 51.37 1.62 51.37 1.62s4.02 15.78-10.53 41.26z"
      style={{
        // fill: "#4d4d4e",
        fill: props.options?.fill || (!props.options?.stroke) ? "#4d4d4e" : 'none',
        stroke: props.options?.stroke,
        strokeWidth: props.options?.stroke ? '5px' : undefined
      }}
    />
  </svg>
);

Fan.metadata = {
  width: 50,
  height: 50,
  options: {
    on: 'Boolean',
    fill: 'String',
    stroke: 'String',
    onClick: 'Function'
  },
  ports: [
    {
      key: 'outlet',
      momentum: 1,
      x: '85%',
      y: '20%',
      rotation: 180
    },
    {
      key: 'inlet',
      momentum: -1,
      x: '-5%',
      y: '58%'
    }
  ]
}

