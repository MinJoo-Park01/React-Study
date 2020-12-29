import React, { Component } from 'react';

class EventPractice extends Component {
    //state에 인풋값을 넣어봄
    state = {
        message: ''
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해보세요"
                    onChange={
                        (e) => {
                            this.setState({
                                message: e.target.value
                            }) //e는 syntheticEvent, 웹 브라우저의 네이티브 이벤트를 감싸는 객체
                            //e.target.value는 앞으로 변할 인풋값
                        }
                    }
                />
            </div>
        );
    }
}

export default EventPractice;
