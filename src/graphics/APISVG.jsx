import React from "react";

const APISVG = props => (
  <svg 
    {...props}
    viewBox="0 0 16 22"
  >
    <g id="api-svg" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="APISVG" transform="translate(-4.000000, -1.000000)">
            <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
            <path d="M7,5 L17,5 L17,7 L19,7 L19,3 C19,1.9 18.1,1.01 17,1.01 L7,1 C5.9,1 5,1.9 5,3 L5,7 L7,7 L7,5 Z M15.41,16.59 L20,12 L15.41,7.41 L14,8.83 L17.17,12 L14,15.17 L15.41,16.59 Z M10,15.17 L6.83,12 L10,8.83 L8.59,7.41 L4,12 L8.59,16.59 L10,15.17 Z M17,19 L7,19 L7,17 L5,17 L5,21 C5,22.1 5.9,23 7,23 L17,23 C18.1,23 19,22.1 19,21 L19,17 L17,17 L17,19 Z" id="Shape" fill={props.color} fillRule="nonzero"></path>
        </g>
    </g>
</svg>
    
);

export default APISVG;

