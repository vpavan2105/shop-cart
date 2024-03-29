import { IOrderState } from '../utils/adminUtils'
import { FetchOrder, UpdateOrder } from '../actionTypes'


const initialState :IOrderState = {
    isLoadingFetch :false,
    isLoadingUpdate :false,
    ordersData:[],
    isErrorFetch:false,
    isErrorUpdate:false

}


export const orderReducer = (state:IOrderState = initialState,{type,payload}:any ):IOrderState => {
    switch(type) {

        case FetchOrder.FETCH_ORDER_LOADING : return {...state,isLoadingFetch:true}
        case FetchOrder.FETCH_ORDER_SUCCESS : return {...state,isLoadingFetch:false,ordersData:payload}
        case FetchOrder.FETCH_ORDER_ERROR : return {...state,isLoadingFetch:false,isErrorFetch:true}
        case UpdateOrder.UPDATE_ORDER_LOADING : return {...state,isLoadingUpdate:true}
        case UpdateOrder.UPDATE_ORDER_SUCCESS : return {...state,isLoadingUpdate:false,ordersData:
                                                state.ordersData.map((order)=>order.id != payload.id ? 
                                                order : payload)}
        case UpdateOrder.UPDATE_ORDER_ERROR : return {...state,isLoadingUpdate:false,isErrorUpdate:true}
        default : return state
    }
}