
import {FETCH_PRODUCTS,  PRODUCTS_LOADING } from '../actionTypes.tsx';
import {  ProductState } from '../utils/Product_Utils';



// export interface CategoryState {
//   categories: string[];
// }

// export interface FilteredProductsState {
//   filteredProducts: string[];
//   isloading : boolean;
// }

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

// export const initialCategoryState: CategoryState = {
//   categories: [],
// };

// const categoryReducer = (state = initialCategoryState, action: any) => {
//   switch (action.type) {
//     case FETCH_CATEGORIES:
//       return {
//         ...state,
//         categories: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const initialFilteredProductsState: FilteredProductsState = {
//   filteredProducts: [],
//   isloading : false,
// };

// const filteredProductsReducer = (state = initialFilteredProductsState, action: any) => {
//   switch (action.type) {
//     case PRODUCTS_LOADING:
//       return {
//         ...state,
//         isloading : true
//       }
//     case ADD_TO_FILTERED_PRODUCTS:
//       return {
//         ...state,
//         filteredProducts: [...state.filteredProducts, action.payload],
//         isloading : false
//       };
//     default:
//       return state;
//   }
// };


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
