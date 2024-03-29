
import { IProductState } from "../../utils/Admin/adminUtils"
import {  AddProduct, DeleteProduct, FetchProduct, UpdateProduct } from '../actionTypes'
import { PayloadAction } from "@reduxjs/toolkit"


const initialState : IProductState = {
    isLoadingFetch:false,
    isLoadingAdd:false,
    isLoadingUpdate:false,
    isLoadingDelete:false,
    productsData:[],
    isErrorFetch:false,
    isErrorAdd:false,
    isErrorUpdate:false,
    isErrorDelete:false,
}

export const productReducer = (state:IProductState = initialState, {type, payload}:PayloadAction<any>):IProductState => {

    switch(type){
        case FetchProduct.FETCH_PRODUCT_LOADING : return {...state,isLoadingFetch:true}
        case FetchProduct.FETCH_PRODUCT_SUCCESS : return {...state,isLoadingFetch:false,productsData:payload}
        case FetchProduct.FETCH_PRODUCT__ERROR  : return {...state,isErrorFetch:false,productsData:[],isLoadingFetch:false}

        case AddProduct.ADD_PRODUCT_LOADING : return {...state,isLoadingAdd:true}
        case AddProduct.ADD_PRODUCT_SUCCESS: return {...state,isLoadingAdd:false,productsData:[...state.productsData,payload]}
        case AddProduct.ADD_PRODUCT_ERROR : return {...state,isErrorAdd:true,isLoadingAdd:false}

        case UpdateProduct.UPDATE_PRODUCT_LOADING : return {...state,isLoadingUpdate:true}
        case UpdateProduct.UPDATE_PRODUCT_SUCCESS : return {...state,isLoadingUpdate:false,productsData:
                                                            state.productsData.map(prod => prod.id == payload.id ? payload:prod )
                                                        }
        case UpdateProduct.UPDATE_PRODUCT_ERROR : return {...state,isErrorUpdate:true,isLoadingUpdate:false}

        case DeleteProduct.DELETE_PRODUCT_LOADING : return {...state,isLoadingDelete:true}
        case DeleteProduct.DELETE_PRODUCT_SUCCESS : return {...state,isLoadingDelete:false,productsData:
                                                            state.productsData.filter(prod => prod.id != payload)
                                                        }
        case DeleteProduct.DELETE_PRODUCT_ERROR : return {...state,isLoadingDelete:false,isErrorDelete:true}

        default: return state
    }
}