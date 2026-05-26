import React from 'react';

/* created with help of
https://react-svgr.com/playground/ and 
https://stackoverflow.com/questions/60713744/how-to-draw-an-arrow-in-svg */ 

const CurvedArrow = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={1} {...props}>
    <defs>
      <marker
        id="a"
        markerHeight={4}
        markerWidth={3}
        orient="auto"
        refX={0.1}
        refY={2}
      >
        <path d="M0 0v4l2-2Z" />
      </marker>
    </defs>
    <path
      fill="none"
      stroke="#000"
      strokeWidth={1}
      markerEnd="url(#a)"
      d="m0 0 80 100"
    />
  </svg>
)

export default CurvedArrow