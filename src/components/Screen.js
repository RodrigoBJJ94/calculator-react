import React from 'react';

export default function Screen(props) {
    return (
        <div className="div-screen">
        <span className="div-screen-operation">{props.value}</span>
        <span className="div-screen-result">{props.res}</span>
      </div>
    );
};