import React, { useEffect, useState } from 'react';
import useInputs from './useInputs';

const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });
    //const [name, setName] = useState('');
    //const [nickname, setNickname] = useState('');

    const { name, nickname } = state;

    // useEffect(() => {
    //     //1. componentDidMount + ComponentDidUpdate
    //     // console.log('렌더링이 완료되었습니다!!');
    //     // console.log({
    //     //     name,
    //     //     nickname
    //     // });
    //     //2. Mount때만 실행
    //     //두번째 파라미터로 비어있는 배열 넣어주기
    //     //     console.log('마운트될때만 실행');
    //     // },[]);
    //     // 3. 특정값(예를 들어 이름만)이 업데이트 될때만 실행
    //     //     console.log(name);
    //     // }, [name]);
    //     //4. 뒷정리하기
    //     console.log('effect');
    //     console.log(name);
    //     return () => {
    //         console.log('cleanup');
    //         console.log(name);
    //     };
    // });

    // const onChangeName = e => {
    //     setName(e.target.value);
    // };

    // const onChangeNickname = e => {
    //     setNickname(e.target.value);
    // };

    return (
        <div>
            <div>
                <input value={name} onChange={onChange} />
                <input value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;