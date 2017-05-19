import React from 'react';
import { string } from 'prop-types';
import svgTextWrap from 'svg-text-wrap';

const ImagePreview = ({ text = '' }) => {

  const width = 512;
  const height = 448;
  let lines = [];
  if (text) {
    lines = svgTextWrap(
      text,
      350,
      {
        'letter-spacing': '1px',
        'style': 'font-size: 48px',
      },
    ).map((line, index) => (
      <tspan
        key={index}
        x={width / 2}
        dy="50">
        {line}
      </tspan>
    ));
  }
  const linesNumber = lines.length;

  return (
    <div className="image-preview">
      <svg width={`${width}px`} height={`${height}px`} viewBox={`0 0 ${width} ${height}`} version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g>
            <rect fill="#417505" x="0" y="0" width={width} height={height}></rect>
            <text
              fontFamily="OpenSans-Semibold, Open Sans"
              fontSize="48"
              fontWeight="500"
              fill="#FFFFFF"
              y={(height / 2) - 10 - (25 * linesNumber)}
              textAnchor="middle"
              alignmentBaseline="middle">
              {lines}
            </text>
          </g>
        </g>
      </svg>
    </div>
  )
};

ImagePreview.propTypes = {
  text: string,
};

export default ImagePreview;
