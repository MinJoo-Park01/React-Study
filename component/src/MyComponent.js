import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children, favoriteNumber }) => {
    //const { name, children } = props;
    return (<div>안녕하세요, 제 이름은 {name}입니다.<br />
        {/*br태그는 줄바꿈*/}
    children 값은 {children}
    입니다.
        <br />
    제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
    );
};
//비구조화 할당 문법을 통해 props 추출
//전에 props.name이라고 표현하지 않고, name으로 표현

MyComponent.defaultProps = {
    name: '기본이름'
};
//props를 따로 설정하지 않았을 때 보여주는 기본값

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}; //name값을 string형태로 전달

export default MyComponent;