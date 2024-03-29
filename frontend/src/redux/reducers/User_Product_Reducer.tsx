
import {FETCH_PRODUCTS,  PRODUCTS_LOADING } from '../actionTypes/actionTypes_Products.tsx';
import {  ProductState } from '../utils/Product_Utils.tsx';


export const initialProductState: ProductState = {
  products: [],
  loading: false,
};

export const productReducer = (state = initialProductState, action: any) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

// export const initialAuthState: AuthState = {
//   auth:false
// };

// export const authReducer = (state = initialAuthState, action: any) => {
//   switch (action.type) {
//     case LOGIN_SUCCESS:
//       return true;
//     case LOGOUT:
//       return false;
//     default:
//       return state;
//   }
// };

// export default rootReducer;
