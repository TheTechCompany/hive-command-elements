import * as React from "react";
import { SVGProps } from "react";

export const ButterflyValve = (props: any) => {
  const open = props.options?.open || false;

  return (<svg
      viewBox="0 -0.092 80.245 51.312"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      style={{
        filter: open == true ? 'drop-shadow(0px 0px 5px green)' : undefined,
      }}
      {...props}
    >
      <linearGradient
        id="butterfly_valve_svg__a"
        gradientUnits="userSpaceOnUse"
        x1={-895.648}
        y1={124.468}
        x2={-895.648}
        y2={173.161}
        gradientTransform="matrix(-1 0 0 1 -823.464 -123.158)"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#333334",
          }}
        />
        <stop
          offset={0.501}
          style={{
            stopColor: "#7d7e81",
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#333334",
          }}
        />
      </linearGradient>
      <linearGradient
        id="butterfly_valve_svg__b"
        gradientUnits="userSpaceOnUse"
        x1={-831.563}
        y1={124.468}
        x2={-831.563}
        y2={173.161}
        gradientTransform="matrix(-1 0 0 1 -823.464 -123.158)"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#333334",
          }}
        />
        <stop
          offset={0.501}
          style={{
            stopColor: "#7d7e81",
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#333334",
          }}
        />
      </linearGradient>
      <radialGradient
        id="butterfly_valve_svg__c"
        cx={48.595}
        cy={66.296}
        r={5.547}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(-9.265 -40.451)"
      >
        <stop
          offset={0.019}
          style={{
            stopColor: "#8d8c8e",
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#616264",
          }}
        />
      </radialGradient>
      <path
        fill="url(#butterfly_valve_svg__a)"
        d="M64.325 1.209h15.72v48.87h-15.72z"
      />
      <path
        fill="url(#butterfly_valve_svg__b)"
        d="M.245 1.209h15.71v48.87H.245z"
      />
      <path 
        style={{
          transform: `translateY(${open == true ? -1 : 0}px) rotate(${open == true ? '-44' : '45'}deg)`,
        }}
        fill="none"
        stroke="#4C4C4D"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="m25.455 12.419 27.75 27.75"
        />
      <path
        fill="none"
        stroke="#4C4C4D"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M15.375 1.689h47.91v47.91h-47.91z"
      />
      <circle
        fill="url(#butterfly_valve_svg__c)"
        cx={39.335}
        cy={25.849}
        r={5.55}
      />
    </svg>
  );
}


ButterflyValve.metadata = {
  type: 'valve',
  width: 40,
  height: 25,
  ports: [
    {
      key: 'outlet',
      momentum: 1,
      x: '90%',
      y: '30%',
      rotation: 180
    },
    {
      key: 'inlet',
      momentum: -1,
      x: '-10%',
      y: '30%'
    }
  ]
}