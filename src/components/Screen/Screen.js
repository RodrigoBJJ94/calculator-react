import React from 'react';

export default function Screen({ valueScreen, result }) {
  return (
    <div className="div-screen">
      <span className="div-screen-operation">{valueScreen}</span>
      <span className="div-screen-result">{result}</span>
    </div>
  );
};
