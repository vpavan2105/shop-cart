import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { authReducer, productReducer } from './reducers/ProductReducer';

// const initialState = {
//     product: initialProductState,
//     category: initialCategoryState,
//     filteredProducts: initialFilteredProductsState,
//   };

const rootReducer = combineReducers({
  product: productReducer,
  auth : authReducer,
});



const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

export default store;
