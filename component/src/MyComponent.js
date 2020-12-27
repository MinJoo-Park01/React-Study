const MyComponent = props => {
    return <div>안녕하세요, 제 이름은 {props.name}입니다.<br />
        {/*br태그는 줄바꿈*/}
    children 값은 {props.children}
    입니다.
    </div>;
};

MyComponent.defaultProps = {
    name: '기본이름'
};
//props를 따로 설정하지 않았을 때 보여주는 기본값

export default MyComponent;