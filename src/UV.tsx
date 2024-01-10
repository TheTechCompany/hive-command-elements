import * as React from "react";
import type { SVGProps } from "react";

export const UV = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="uv_svg__Layer_1"
    x={0}
    y={0}
    viewBox="0 0 165.4 45.3"
    {...props}
  >
    <style>{".uv_svg__st1{fill:#4d4d4e}"}</style>
    <linearGradient
      id="uv_svg__SVGID_1_"
      x1={75.411}
      x2={75.411}
      y1={14.88}
      y2={44.88}
      gradientUnits="userSpaceOnUse"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#393839",
        }}
      />
      <stop
        offset={0.5}
        style={{
          stopColor: "#7e7f81",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#393839",
        }}
      />
    </linearGradient>
    <path
      d="M146.9 44.9H3.9C2 44.9.4 43.3.4 41.4v-23c0-1.9 1.6-3.5 3.5-3.5h143c1.9 0 3.5 1.6 3.5 3.5v23c0 1.9-1.6 3.5-3.5 3.5z"
      style={{
        fill: "url(#uv_svg__SVGID_1_)",
      }}
    />
    <path d="M6.27 14.902v-10h17.6v10z" className="uv_svg__st1" />
    <linearGradient
      id="uv_svg__SVGID_00000114042839260797354350000001853898132272339639_"
      x1={0.411}
      x2={30.411}
      y1={2.614}
      y2={2.614}
      gradientUnits="userSpaceOnUse"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#393839",
        }}
      />
      <stop
        offset={0.5}
        style={{
          stopColor: "#7e7f81",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#393839",
        }}
      />
    </linearGradient>
    <path
      d="M30.4 2.6c0-1.2-1-2.2-2.2-2.2H2.6C1.4.4.4 1.4.4 2.6c0 1.2 1 2.2 2.2 2.2h25.5c1.3.1 2.3-.9 2.3-2.2z"
      style={{
        fill: "url(#uv_svg__SVGID_00000114042839260797354350000001853898132272339639_)",
      }}
    />
    <path d="M150.4 20.7h10v17.6h-10z" className="uv_svg__st1" />
    <linearGradient
      id="uv_svg__SVGID_00000170243620128869902510000018192573999936894911_"
      x1={162.677}
      x2={162.677}
      y1={14.88}
      y2={44.88}
      gradientUnits="userSpaceOnUse"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#393839",
        }}
      />
      <stop
        offset={0.5}
        style={{
          stopColor: "#7e7f81",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#393839",
        }}
      />
    </linearGradient>
    <path
      d="M162.7 44.9c1.2 0 2.2-1 2.2-2.2V17.1c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v25.5c-.1 1.3.9 2.3 2.2 2.3z"
      style={{
        fill: "url(#uv_svg__SVGID_00000170243620128869902510000018192573999936894911_)",
      }}
    />
  </svg>
);


UV.metadata = {
  type: 'uv',
  width: 150,
  height: 50,
  ports: [
    {
      key: 'inlet',
      momentum: 1,
      x: '5%',
      y: '5%',
    },
    {
      key: 'outlet',
      momentum: -1,
      x: '95%',
      y: '55%'
    }
  ]
}
