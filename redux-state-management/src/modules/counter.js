const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션타입은 대문자로, 모듈이름/액션이름 <-나중에 충돌을 막아준다

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
    number: 0
};

function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}

export default counter;