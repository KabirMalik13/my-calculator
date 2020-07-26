import React from 'react';
import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';

class Calculator extends React.Component {
  state = {
    equation: '',
    result: 0
  }
  
  render() {
    return (
      <main className="calculator">
        <Screen equation={this.state.equation} result={this.state.result} />
        <Keypad />
      </main>
    );
  }
}
export default Calculator;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

