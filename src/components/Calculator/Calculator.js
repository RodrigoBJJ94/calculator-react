import React, { useState } from 'react';
import ScreenCalculator from '../Screen/ScreenCalculator';
import Buttons from '../Buttons/Buttons';

export default function Screen() {
  const [valueScreen, setValueScreen] = useState('');
  const [result, setResult] = useState(0);
  const [accumulator, setAccumulator] = useState();
  const [operate, setOperate] = useState(false);

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

  const cleanScreen = () => {
    setOperate(false);
    setValueScreen('');
    setResult(0);
    setAccumulator(0);
    return;
  };

  return (
    <>
      <ScreenCalculator
        valueScreen={valueScreen}
        result={result}
      />
      <Buttons
        cleanScreen={cleanScreen}
        operation={operation}
        addDigitScreen={addDigitScreen}
      />
    </>
  );
};
