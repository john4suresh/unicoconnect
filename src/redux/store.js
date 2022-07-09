import { combineReducers, createStore } from 'redux';
import trelloReducer from "./reducer";

export const trelloApp = combineReducers({
  trello: trelloReducer,
});


const store = createStore(trelloApp);


export default store;