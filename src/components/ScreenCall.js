import React from 'react';

export default function ScreenCall(props) {
    return (
        <>
        {props.screen(props.valueScreen, props.result)}
        </>
    );
};