import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0
    };
    render() {
        const { number, fixedNumber } = this.state; //state조회할 때는 this.state로 조회
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button onClick={() => { //onClick이었을 때 실행할 함수
                    this.setState(prevState => {
                        return {
                            number: prevState.number + 1
                        };
                    });
                    this.setState(prevState => ({
                        number: prevState.number + 1
                    }));
                }} //prevstate를 사용해서 두 번 값을 변경
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;