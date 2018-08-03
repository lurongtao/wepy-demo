import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise' //redux-thunk redux-saga
import rootReducer from './reducers'

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))
  return store
}