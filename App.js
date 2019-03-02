import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer';//index.js를 바라 봄
import reducer from './reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

let store = createStore(reducer);

console.log(store);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>  
        <Timer />
      </Provider>
    
    )
  }
}
