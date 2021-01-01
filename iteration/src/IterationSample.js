import React from 'react';

const IterationSample = () => {
    /*
    return (
        <ul>
            <li>눈사람</li>
            <li>얼음</li>
            <li>눈</li>
            <li>바람</li>
        </ul>

    )
    */
    //데이터 배열을 컴포넌트 배열로 변환
    const names = ['눈사람', '얼음', '눈', '바람'];
    const nameList = names.map(name => <li key={index}>{name}</li>);
    //고유한 값이 없을 때만, key 값을 index로 사용
    return <ul>{nameList}</ul>

}
export default IterationSample;