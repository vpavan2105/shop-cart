import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { productReducer } from "./reducers/productReducer";
import { thunk } from "redux-thunk";
import { ICartState, IOrderState, IProductState, IUserState } from "../utils/Admin/adminUtils";
import { userReducer } from "./reducers/userReducer";
import { orderReducer } from "./reducers/orderReducer";
import { cartReducer } from "./reducers/cartReducer";

interface IRoot{
    products:IProductState|{};
    users:IUserState|{};
    orders:IOrderState|{};
    carts:ICartState|{};
}
const rootReducer = combineReducers<IRoot>({
    products:productReducer,
    users:userReducer,
    orders:orderReducer,
    carts:cartReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch