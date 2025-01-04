import { combineReducers } from "redux";
import productReducer from "./productReducer";
import { products } from "../../utils/data";

export default combineReducers({
    products: productReducer
})