import React, { Component } from 'react';
import './App.css';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <>
        <ScrollBox ref={(ref) => this.scrollBox = ref} />
        <button onClick={() => this.scrollBox.scrollToButtom()}>
          맨 밑으로
        </button>
      </>
    );
  }
}

export default App;
