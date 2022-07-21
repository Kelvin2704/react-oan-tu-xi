import { combineReducers, createStore } from "redux";
import OanTuXiReducer from "./reducer/OanTuXiReducer";


const rootReducer = combineReducers({
  //state OanTuXi
  OanTuXiReducer: OanTuXiReducer,
  // DatVeXemPhimReducer: DatVeXemPhimReducer
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
