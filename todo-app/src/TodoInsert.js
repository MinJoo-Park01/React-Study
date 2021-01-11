import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.css';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
        //console.log({ value });
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');

            e.preventDefault(); //submit 이벤트는 브라우저에서 새로고침을 발생하는데, 이를 막기위해서 이 함수를 호출함
        },
        [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일 입력"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert;