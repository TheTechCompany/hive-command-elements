import * as React from "react";
import type { SVGProps } from "react";

export const Multimedia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="multimedia_svg__Layer_1"
    x={0}
    y={0}
    viewBox="0 0 31.5 97.4"
    {...props}
  >
    <style>{".multimedia_svg__st0{fill:#4d4d4e}"}</style>
    <path
      d="M10 19.6c1.3 1 3.3 1.5 5.7 1.5 2.4 0 4.4-.6 5.7-1.5 3.8 2.1 6.3 6.1 6.3 10.6v62.5c0 .6-.5 1.1-1.1 1.1H4.8c-.6 0-1.1-.5-1.1-1.1V30.1c0-4.4 2.5-8.5 6.3-10.5m10.4-3.7c-.2 1.5-2.4 2.2-4.7 2.2-2.3 0-4.5-.7-4.7-2.2C5 17.9.7 23.5.7 30.1v62.5c0 2.3 1.8 4.1 4.1 4.1h21.8c2.3 0 4.1-1.8 4.1-4.1V30.1c0-6.6-4.3-12.2-10.3-14.2z"
      className="multimedia_svg__st0"
    />
    <path
      d="M27.7 3.6v2.2h-8.3c-1.7 0-3 1.3-3 3v4.3H15V8.8c0-1.7-1.3-3-3-3H3.7V3.6h24m.6-3H3.1C1.8.6.7 1.7.7 3v3.4c0 1.3 1.1 2.4 2.4 2.4H12v5.9c0 .8 1.7 1.4 3.7 1.4s3.7-.6 3.7-1.4V8.8h8.9c1.3 0 2.4-1.1 2.4-2.4V3c0-1.3-1.1-2.4-2.4-2.4z"
      className="multimedia_svg__st0"
    />
  </svg>
);

Multimedia.metadata = {
  type: 'multimedia',
  width: 50,
  height: 150,
  ports: [
    {
      key: 'outlet',
      momentum: 1,
      x: '80%',
      y: '42%',
      rotation: 180
    },
    {
      key: 'inlet',
      momentum: -1,
      x: '-5%',
      y: '42%'
    }
  ]
}
