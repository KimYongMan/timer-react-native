// import

// Action(스위치에서 사용할 variable 정의)
const START_TIMER='START_TIMER';
const RESTART_TIMER='RESTART_TIMER';
const ADD_SECOND='ADD_SECOND';

//Action Create
function startTimer(){
    return {
        type: START_TIMER
    };
}
function restartTimer(){
    return {
        type: RESTART_TIMER
    };
}
function addSecond(){
    return {
        type: ADD_SECOND
    };
}

//reducer

const TIMER_DURATION=1500;
const initialState={
    isPlaying: false,
    elapsedTime:0,
    timerDuration: TIMER_DURATION
}
//Reducer create

function reducer(state=initialState, action){
    switch(action.type){
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        default:
            return state;
    }
}


function applyStartTimer(state){
    return{
        ...state,//이전 state 반환
        isPlaying: true
    };
}
function applyRestartTimer(state){
    return{
        ...state,
        isPlaying: false,
        elapsedTime : 0
    };
}
function applyAddSecond(state){
    if(state.elapsedTime < TIMER_DURATION){
        return{
            ...state,
            elapsedTime: state.elapsedTime+1
        };
    }else{
        return{
            ...state,
            isPlaying: false
        }
    }
}
//Export Action create

const actionCreators={
    startTimer,
    restartTimer,
    addSecond
}

export {actionCreators};
//Export recucer
export default reducer;