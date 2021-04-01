import * as actionTypes from '../actions';

const initialState = {
	results: []
};

// reducers разделены на разные файлы, но state.counter
// доступен в reducer, который выводит store, потому что в результате
// они все равно объединены в один файл - в один rootReducer

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case(actionTypes.STORE_RESULT):
			return {
				...state,
				// Так как массив тоже должен быть обновлен immutably,
				// то мы не делаем store.results.push(), мы пишем
				// concat метод, так как он возвращает новый массив
				// и мы сразу добавляем в него значение
				// results: state.results.concat({id: new Date(), value: state.counter})

				// При разделение на разные reducer мы не будем внутри reducers
				// иметь доступ к state + ключ state другого reducer, вместо этого
				// мы state передаем как action payload
				results: state.results.concat({id: new Date(), value: action.result})
			}
		case(actionTypes.DELETE_RESULT):
			// Мы создаем копию массива, в нем есть объекты {id: , value: }
			// Если мы будем менять данные объекты, то это не immutable way
			// Поэтому мы можем просто удалять отдельные объекты

			// Вариант 1
			// const id = 2;
			// const newArray = [...state.results];
			// newArray.splice(id, 1);

			// Вариант 2
			const updatedArray = state.results.filter(result => result.id !== action.resultElId);
			return {
				...state,
				results: updatedArray
			}
		default: return state;
	}
}

export default reducer;