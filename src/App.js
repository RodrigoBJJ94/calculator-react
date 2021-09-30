import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [valueScreen, setValueScreen] = useState('');
  const [result, setResult] = useState(0);
  const [accumulator, setAccumulator] = useState();
  const [operate, setOperate] = useState(false);

  const screen = (value, res) => {
    return (
      <div className="div-screen">
        <span className="div-screen-operation">{value}</span>
        <span className="div-screen-result">{res}</span>
      </div>
    );
  };

  const button = (label, onClick) => {
    return (
      <button className="button" onClick={onClick}>{label}</button>
    );
  };

  const addDigitScreen = (digit) => {
    if ((digit === '*' || digit === '/' || digit === '+' || digit === '-') && operate) {
      setOperate(false);
      setValueScreen(result + digit);
      return;
    };

    if (operate) {
      setValueScreen(digit);
      setOperate(false);
      return;
    };

    const typedValueScreen = valueScreen + digit;
    setValueScreen(typedValueScreen);
  };

  const cleanScreen = () => {
    setOperate(false);
    setValueScreen('');
    setResult(0);
    setAccumulator(0);
    return;
  };

  const operation = (op) => {
    if (op === 'backspace') {
      let vScreen = valueScreen;
      vScreen = vScreen.substring(0, (vScreen.length - 1));
      setValueScreen(vScreen);
      setOperate(false);
      return;
    };

    try {
      let vScreen = valueScreen;
      if ((vScreen.match('[%]')) && (vScreen.match('[-]'))) {
        let percent = vScreen.split('-');
        let percent2 = percent[1].substring(0, (percent[1].length - 1))
        let percent3 = Number(percent[0] / 100) * Number(percent2);
        let percent4 = Number(percent[0]) - Number(percent3);
        setOperate(false);
        setValueScreen(percent4);
        setResult(percent4);
      } else if (vScreen.match('[%]')) {
        let percent5 = vScreen.split('+');
        let percent6 = percent5[1].substring(0, (percent5[1].length - 1))
        let percent7 = Number(percent5[0] / 100) * Number(percent6);
        let percent8 = Number(percent5[0]) + Number(percent7);
        setOperate(false);
        setValueScreen(percent8);
        setResult(percent8);
      } else if (vScreen.match('[√]')) {
        let squareRoot = vScreen.substring(0, vScreen.length - 1);
        let squareRoot2 = Number(squareRoot);
        let squareRoot3 = Math.sqrt(squareRoot2);
        setOperate(false);
        setValueScreen(squareRoot3);
        setResult(squareRoot3);
      } else {
        const res = eval(valueScreen);
        setAccumulator(res);
        setResult(res);
        setOperate(true);
      }

    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="container">
      <h3 className="title">Calculator</h3>
      {screen(valueScreen, result)}
      <div className="buttons">
        {button('C', cleanScreen)}
        {button('DEL', () => operation('backspace'))}
        {button('%', () => addDigitScreen('%'))}
        {button('÷', () => addDigitScreen('/'))}
        {button('7', () => addDigitScreen('7'))}
        {button('8', () => addDigitScreen('8'))}
        {button('9', () => addDigitScreen('9'))}
        {button('x', () => addDigitScreen('*'))}
        {button('4', () => addDigitScreen('4'))}
        {button('5', () => addDigitScreen('5'))}
        {button('6', () => addDigitScreen('6'))}
        {button('-', () => addDigitScreen('-'))}
        {button('1', () => addDigitScreen('1'))}
        {button('2', () => addDigitScreen('2'))}
        {button('3', () => addDigitScreen('3'))}
        {button('+', () => addDigitScreen('+'))}
        {button('0', () => addDigitScreen('0'))}
        {button('00', () => addDigitScreen('00'))}
        {button('000', () => addDigitScreen('000'))}
        {button('√', () => addDigitScreen('√'))}
        {button('(', () => addDigitScreen('('))}
        {button(')', () => addDigitScreen(')'))}
        {button('.', () => addDigitScreen('.'))}
        {button('=', () => operation('='))}
      </div>
    </div>
  );
};