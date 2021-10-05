import React from 'react';

export default function ButtonsCall(props) {
    return (
        <>
            {props.button('C', props.cleanScreen)}
            {props.button('DEL', () => props.operation('backspace'))}
            {props.button('%', () => props.addDigitScreen('%'))}
            {props.button('÷', () => props.addDigitScreen('/'))}
            {props.button('7', () => props.addDigitScreen('7'))}
            {props.button('8', () => props.addDigitScreen('8'))}
            {props.button('9', () => props.addDigitScreen('9'))}
            {props.button('x', () => props.addDigitScreen('*'))}
            {props.button('4', () => props.addDigitScreen('4'))}
            {props.button('5', () => props.addDigitScreen('5'))}
            {props.button('6', () => props.addDigitScreen('6'))}
            {props.button('-', () => props.addDigitScreen('-'))}
            {props.button('1', () => props.addDigitScreen('1'))}
            {props.button('2', () => props.addDigitScreen('2'))}
            {props.button('3', () => props.addDigitScreen('3'))}
            {props.button('+', () => props.addDigitScreen('+'))}
            {props.button('0', () => props.addDigitScreen('0'))}
            {props.button('00', () => props.addDigitScreen('00'))}
            {props.button('000', () => props.addDigitScreen('000'))}
            {props.button('√', () => props.addDigitScreen('√'))}
            {props.button('(', () => props.addDigitScreen('('))}
            {props.button(')', () => props.addDigitScreen(')'))}
            {props.button('.', () => props.addDigitScreen('.'))}
            {props.button('=', () => props.operation('='))}
        </>
    );
};
