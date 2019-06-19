import { applyMiddleware, compose, createStore } from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from './reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x

const middleware = applyMiddleware(reduxThunk)

const enhancer = compose(middleware, devTools)

const store = createStore(reducer, enhancer)

export default store