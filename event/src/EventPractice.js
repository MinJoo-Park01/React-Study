import React, { Component } from 'react';

class EventPractice extends Component {
    //state에 인풋값을 넣어봄
    state = {
        message: ''
    }

    /*constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    메서드 바인딩은 원래 생성자 메서드에서 하는 것이 정석
    하지만,  새 메서드를 만들 때마다 constructor를 수정해야하기 때문에 
    transform-class-properties문법을 사용해서 화살표 함수로 메서드 정의
    */

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={
                    this.handleClick
                }>확인</button>
            </div>
        );
    }
}

export default EventPractice;
