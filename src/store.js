import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'

import loginReducer from 'init/login/reducer'
import mainAppReducer from 'mainapp/reducer'
import appBarReducer from 'appbar/reducer'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

const rootReducer = combineReducers({
  routing: routerReducer,
  loginReducer, appBarReducer, mainAppReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)
export default store