import React, { Component } from 'react';
import './App.css';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  state = {
    upDown: 'u',
    value: 'To Bottom',
  }

  upOrDown = () => {
    if (this.state.upDown === 'u') {
      this.setState({
        upDown: 'd',
        value: 'To Top',
      });
    }
    else {
      this.setState({
        upDown: 'u',
        value: 'To Bottom',
      })
    }
  }

  render() {
    return (
      <>
        <ScrollBox ref={(ref) => this.scrollBox = ref} />
        <button onClick={() => {
          this.scrollBox.scrollChange(this.state.upDown);
          this.upOrDown();
        }}>
          이동
        </button>
      </>
    );
  }
}

export default App;
