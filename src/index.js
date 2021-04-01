import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";

// Метод combineReducers принимает объект всех reducers и объединяет
// их в один rootReducer
const rootReducer = combineReducers({
	ctr: counterReducer,
	res: resultReducer
});

const store = createStore(rootReducer);

// HOC Provider - это HOC, импортируемый из react-redux,
// он позволяет нам внедрить store в компонент App React
// В компоненте Counter - контейнере, нам нужно теперь подключить
// данный store
ReactDOM.render(<Provider store={store}><App /></Provider>,
		document.getElementById('root'));
registerServiceWorker();
