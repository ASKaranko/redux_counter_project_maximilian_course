const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
	counter: 0,
};

// Reducer
const rootReducer = (state= initialState, action) => {
	switch(action.type) {
		case('INC_COUNTER'):
			return {...state, counter: state.counter + 1};
		case('ADD_COUNTER'):
			return {...state, counter: state.counter + action.value};
	}
	return state;
}

// Store
const store = createStore(rootReducer);
// console.log(store.getState());

// Subscription
// Сначала идет подписка, потом dispatch
store.subscribe(() => {
	console.log('[Subscription]', store.getState());
});


// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
// Вторым значением можно передать как несколько значений через запятую,
// так и payload: {} с несколькими значениями в объекте
store.dispatch({type: 'ADD_COUNTER', value: 10});
// console.log(store.getState());