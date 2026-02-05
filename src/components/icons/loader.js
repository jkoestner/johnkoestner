import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Cursive J Loader Logo</title>
    <g>
      {/* Hexagon Outline */}
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none" 
        d="M 50, 5
           L 11, 27
           L 11, 72
           L 50, 95
           L 89, 73
           L 89, 28 z"
      />

      {/* Cursive J - adjusted for the 100x100 viewBox and centered */}
      <g id="j-cursive" transform="translate(35, 30)"> {/* Adjusted translate for centering */}
        <path
          d="M20.5,3 C15.5,3 12.5,4.5 12.5,9 C12.5,13.5 15.5,15 20.5,15 C25.5,15 28.5,13.5 28.5,9 C28.5,4.5 25.5,3 20.5,3 Z M20.5,15 L20.5,36 C20.5,40.5 17.5,42 12.5,42 L3,42"
          stroke="currentColor"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);

export default IconLoader;
