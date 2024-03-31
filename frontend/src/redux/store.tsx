
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import { thunk } from "redux-thunk";
import { ICartState, IOrderState, IProductState, IUserState } from "./utils/adminUtils.tsx";
import { userReducer } from "./reducers/userReducer";
import { orderReducer } from "./reducers/orderReducer";
import { cartReducer } from "./reducers/cartReducer";
import {  ProductState } from "./utils/Product_Utils";
import { productReducer } from "./reducers/User_Product_Reducer.tsx";
import { productReducerAdmin } from "./reducers/productReducer.ts";
interface IRoot{
    products:IProductState|{};
    users:IUserState|{};
    orders:IOrderState|{};
    carts:ICartState|{};
    product:ProductState|{};
    // auth:AuthState;
}
const rootReducer = combineReducers<IRoot>({
    products:productReducerAdmin,
    users:userReducer,
    orders:orderReducer,
    carts:cartReducer,
    product: productReducer,
    // auth : authReducer,
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



export default store;

