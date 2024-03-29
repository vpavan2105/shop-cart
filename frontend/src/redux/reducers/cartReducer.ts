import { ICartState } from "../utils/adminUtils"
import { FetchCarts } from "../actionTypes/actionTypes_Products"

const initialState:ICartState = {
    isLoading: false,
    cartData:[],
    isError: false
}

export const cartReducer = (state:ICartState = initialState,{type,payload}:any):ICartState => {
    switch(type) {
       case FetchCarts.FETCH_CARTS_LOADING : return {...state,isLoading:true}
       case FetchCarts.FETCH_CARTS_SUCCESS: return {...state,isLoading:false,cartData:payload}
       case FetchCarts.FETCH_CARTS_ERROR : return {...state,isLoading:false,isError:true}
 
      default: return state
    }

}