import axios from 'axios';
import { Dispatch } from 'redux';
import { Product } from '../../components/Products/ProductCard';
import { ADD_TO_CART, ADD_TO_FILTERED_PRODUCTS, FETCH_CATEGORIES, FETCH_PRODUCTS, PRODUCTS_LOADING } from '../actionTypes';


export const url:string = "http://localhost:8000/products";


export const fetchProducts = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: PRODUCTS_LOADING });
    const res = await axios.get<Product[]>(url);
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
      const res = await axios.get<string[]>(`${url}?category=${category}`);
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
        const res = await axios.get<Product[]>(`${url}?category=${category}`);
        dispatch({
          type: FETCH_PRODUCTS,
          payload: res.data,
        });
      } catch (error) {
        console.error('Error fetching products:', error);
      }
};


