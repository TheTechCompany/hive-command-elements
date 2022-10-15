import * as React from "react";
import { SVGProps } from "react";

export const ButterflyValve = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    xmlSpace="preserve"
    {...props}
  >
    <linearGradient
      id="butterfly_valve_svg__a"
      gradientUnits="userSpaceOnUse"
      x1={-895.648}
      y1={124.468}
      x2={-895.648}
      y2={173.161}
      gradientTransform="matrix(-1 0 0 1 -814.198 -82.706)"
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
    <path
      fill="url(#butterfly_valve_svg__a)"
      d="M73.59 41.66h15.72v48.87H73.59z"
    />
    <linearGradient
      id="butterfly_valve_svg__b"
      gradientUnits="userSpaceOnUse"
      x1={-831.563}
      y1={124.468}
      x2={-831.563}
      y2={173.161}
      gradientTransform="matrix(-1 0 0 1 -814.198 -82.706)"
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
    <path
      fill="url(#butterfly_valve_svg__b)"
      d="M9.51 41.66h15.71v48.87H9.51z"
    />
    <path
      fill="none"
      stroke="#4C4C4D"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m34.72 52.87 27.75 27.75M24.64 42.14h47.91v47.91H24.64z"
    />
    <radialGradient
      id="butterfly_valve_svg__c"
      cx={48.595}
      cy={66.296}
      r={5.547}
      gradientUnits="userSpaceOnUse"
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
    <circle fill="url(#butterfly_valve_svg__c)" cx={48.6} cy={66.3} r={5.55} />
  </svg>
);

ButterflyValve.metadata = {
  type: 'valve'
}