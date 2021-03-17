import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { invoiceReducer } from "./invoiceReducer"

const rootReducer = combineReducers({
	documents: invoiceReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
