import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"


export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
export interface ProductState {
    products: Product[];
    loading: boolean;
  }

export interface AuthState{
    auth:boolean
  }