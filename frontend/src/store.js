import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { eventListReducer, eventDetailsReducer } from "./reducers/eventReducers";
import { userLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
	eventList: eventListReducer,
	eventDetails: eventDetailsReducer,
	userLogin: userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo') ?
	JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(reducer, initialState,
	composeWithDevTools(applyMiddleware(...middleware)));

export default store;
