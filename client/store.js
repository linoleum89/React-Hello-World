import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'

const logger = createLogger({
	// ...options
})

// Reducer
function counter(state = { value: 0 }, action) {
	switch (action.type) {
		case 'INCREMENT':
			return { value: state.value + 1 }
		case 'DECREMENT':
			return { value: state.value - 1 }
		default:
			return state
	}
}

export default createStore(
	counter,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(logger),
)
