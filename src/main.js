import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import {createStore} from 'redux';
import reducer from './components/Reducers/reducer.js';
import { Provider } from 'react-redux';

const store = createStore(reducer); 

//store.subscribe(() => {console.log(store.getState());})

    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('app')
      );
    

