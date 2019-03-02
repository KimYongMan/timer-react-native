import {connect} from 'react-redux';
import Timer from './presenter';
import {bindActionCreators} from 'redux';
import {actionCreators as tomatoAction} from '../../reducer';


function mapStatetoProps(state){// 이 state는 App.js에서 Provider에서 가져옴, Prover는 자동으로 복사하기 때문
    const {isPlaying, elapsedTime, timerDuration} = state;
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    }
}

function mapDispatchToProps(dispatch){
    return{
        startTimer : bindActionCreators(tomatoAction.startTimer, dispatch),
        restartTimer: bindActionCreators(tomatoAction.restartTimer, dispatch),
        addSecond : bindActionCreators(tomatoAction.addSecond, dispatch)
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Timer);