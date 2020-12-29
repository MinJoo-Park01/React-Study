import React, { useState } from 'react';

//이벤트연습을 클래스형 컴포넌트가 아닌 함수형 컴포넌트로 나타냄

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const { username, message } = form;
    const onChange = e => {
        const nextForm = {
            ...form, //기존의 form내용을 이자리에 복사
            [e.target.name]: e.target.value //원하는 값을 덮어 씌우기
        };
        setForm(nextForm);
    };
    /*
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    */
    const onClick = () => {
        alert(username + ' : ' + message);
        setForm({
            username: '',
            message: ''
        });
    };

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명 입력"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="messge"
                placeholder="메시지를 입력하세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default EventPractice;
