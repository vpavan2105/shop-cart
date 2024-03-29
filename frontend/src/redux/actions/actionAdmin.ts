import axios from "axios";
import {  AddProduct, DeleteProduct, DeleteUser, FetchCarts, FetchOrder, FetchProduct, FetchUsers, UpdateOrder, UpdateProduct } from "../actionTypes/actionTypes";
import {  ProdData } from "../utils/adminUtils";
import {  Dispatch } from "redux";

const BaseUrl:string = `http://localhost:3000/products`;
const UsersUrl:string = `http://localhost:3000/users`;
const CartUrl:string = `http://localhost:3000/carts`;
const OrderUrl:string = `http://localhost:3000/orders`;

export const fetchDataProduct = () =>  (dispatch:Dispatch)  => {
      dispatch({type:FetchProduct.FETCH_PRODUCT_LOADING})
      axios.get(BaseUrl)
      .then((res)=>{
        console.log(res.data);
        dispatch({type:FetchProduct.FETCH_PRODUCT_SUCCESS,payload:res.data})
      })
      .catch((error)=>{
        console.log(error);
        dispatch({type:FetchProduct.FETCH_PRODUCT__ERROR})
      })
}


export const addDataProduct = (newProduct:ProdData)=> (dispatch:Dispatch) => {
     dispatch({type:AddProduct.ADD_PRODUCT_LOADING})
     axios.post(BaseUrl,newProduct)
     .then((res)=>{
        console.log(res.data);
        dispatch({type:AddProduct.ADD_PRODUCT_SUCCESS,payload:res.data});
     })
     .catch((error)=>{
       console.error(error);
       dispatch({type:AddProduct.ADD_PRODUCT_ERROR})
     })

}

export const updateDataProduct = (product:ProdData,id:number|string) => (dispatch:Dispatch) => {
    dispatch({type:UpdateProduct.UPDATE_PRODUCT_LOADING})
    axios.patch(`${BaseUrl}/${id}`, product)
    .then((res)=>{
        console.log(res.data);
        dispatch({type:UpdateProduct.UPDATE_PRODUCT_SUCCESS,payload:res.data});
    })
    .catch((error)=>{
        console.log(error);
        dispatch({type:UpdateProduct.UPDATE_PRODUCT_ERROR})
    })
}

export const deleteDataProduct = (id:number|string) =>  (dispatch:Dispatch)  =>{
    dispatch({type:DeleteProduct.DELETE_PRODUCT_LOADING})
    axios.delete(`${BaseUrl}/${id}`)
    .then((res)=>{
        console.log(res.data);
        dispatch({type:DeleteProduct.DELETE_PRODUCT_SUCCESS,payload:id})
    })
    .catch((error)=>{
        console.log(error);
        dispatch({type:DeleteProduct.DELETE_PRODUCT_ERROR})
    })
}


export const fetchUsersData = () =>  (dispatch:Dispatch)  =>{
      dispatch({type:FetchUsers.FETCH_USERS_LOADING});
      axios.get(UsersUrl)
      .then(res=>{
        console.log(res.data);
        dispatch({type:FetchUsers.FETCH_USERS_SUCCESS,payload:res.data})
      })
      .catch((error)=>{
        dispatch({type:FetchUsers.FETCH_USERS_ERROR});
        console.log(error);
      })
}

export const deleteUserData = (id:number|string) =>  (dispatch:Dispatch)  =>{
    dispatch({type:DeleteUser.DELETE_USER_LOADING});
    axios.delete(`$UsersUrl/${id}`)
    .then(res=>{
        console.log(res.data);
        dispatch({type:DeleteUser.DELETE_USER_SUCCESS,payload:id})
    })
    .catch((error)=>{
        console.log(error);
        dispatch({type:DeleteUser.DELETE_USER_ERROR});
    })
}


export const fetchCartsData = () => (dispatch:Dispatch) =>{
  dispatch({type:FetchCarts.FETCH_CARTS_LOADING});
      axios.get(CartUrl)
      .then(res=>{
        console.log(res.data);
        dispatch({type:FetchCarts.FETCH_CARTS_SUCCESS,payload:res.data})
      })
      .catch((error)=>{
        dispatch({type:FetchCarts.FETCH_CARTS_ERROR});
        console.log(error);
      })
}

export const fetchOrdersData = () =>  (dispatch:Dispatch) =>{
    dispatch({type:FetchOrder.FETCH_ORDER_LOADING});
        axios.get(OrderUrl)
        .then(res=>{
          console.log(res.data);
         dispatch({type:FetchOrder.FETCH_ORDER_SUCCESS,payload:res.data})
        })
        .catch((error)=>{
          dispatch({type:FetchOrder.FETCH_ORDER_ERROR});
          console.log(error);
        })
  }

export const updateOrderData = (payload:{status:boolean},id:string|number) =>  (dispatch:Dispatch)  =>{
    dispatch({type:UpdateOrder.UPDATE_ORDER_LOADING});
    axios.patch(`${OrderUrl}/${id}`,payload)
    .then((res)=>{
        console.log(res.data);
        dispatch({type:UpdateOrder.UPDATE_ORDER_SUCCESS,payload:res.data});
    })
    .catch((error)=>{
        console.log(error);
        dispatch({type:UpdateOrder.UPDATE_ORDER_ERROR});
    })
}

