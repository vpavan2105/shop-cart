import axios from 'axios';
import { ADD_TO_CART, FETCH_CATEGORIES, FETCH_PRODUCTS, PRODUCTS_LOADING } from '../actionTypes/actionTypes_Products.tsx';
import { Dispatch } from 'redux';
import { Product } from '../utils/Product_Utils';
import {ProductUrl} from "../../ApiUrls.tsx";


export const fetchProducts = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: PRODUCTS_LOADING });
    const res = await axios.get<Product[]>(ProductUrl);
    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export const fetchCategories = (category: string) => async (dispatch: Dispatch) => {
    try {
      const res = await axios.get<string[]>(`${ProductUrl}?category=${category}`);
      dispatch({
        type: FETCH_CATEGORIES,
        payload: res.data,
      });
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };


export const addToCart = (product: Product) => ({
  type: ADD_TO_CART,
  payload: product,
});


export const addToFilteredProducts = (category: string) => async(dispatch : Dispatch) => {
    try {
        dispatch({ type: PRODUCTS_LOADING });
        const res = await axios.get<Product[]>(`${ProductUrl}?category=${category}`);
        dispatch({
          type: FETCH_PRODUCTS,
          payload: res.data,
        });
      } catch (error) {
        console.error('Error fetching products:', error);
      }
};


