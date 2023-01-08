// NOTE: use this store variable to create a store.
import { legacy_createStore } from "redux";
import { reducer } from "./Component/Home/redux/reducer";

const store = legacy_createStore(reducer);

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

export { store };
