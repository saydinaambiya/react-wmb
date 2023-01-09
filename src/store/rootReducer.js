import {combineReducers} from "redux";
import foodReducer from "./reducers/foodReducer";
import tableReducer from "./reducers/tableReducer";

const rootReducer = combineReducers({
    foods: foodReducer,
    tables: tableReducer,
})

export default rootReducer;