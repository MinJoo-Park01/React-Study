import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000',  //password가 0000일때 true로 반환하라는 건가?
            password: ''
        })
        this.input.focus();
    }

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleButtonClick();
        }
    }

    render() {
        return (
            <div>
                <input
                    ref={(ref) => this.input = ref}
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                    onKeyPress={this.onKeyPress}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;