import React, { useState } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' }
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); //새로운 항목 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value);

    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);//nextId값에 1을 더해준다
        setNames(nextNames); //names값을 업데이트
        setInputText(''); //inputText값을 비움
    };

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames); //id가 지정된거랑 다르다면 다음 아이디를 앞으로 불러와라?
    }


    const namesList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
        {/*왜 onDoubleClick을 저기다가 넣어야되는 걸까?*/}
        {name.text}</li>);
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </>
    )
}

export default IterationSample;