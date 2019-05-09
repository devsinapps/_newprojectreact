import { combineReducers } from 'redux'
import storeReducer from './storeReducer'

const rootReducers = combineReducers({
    store: storeReducer
})

export default rootReducers