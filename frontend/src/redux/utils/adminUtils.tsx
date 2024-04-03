
export interface ProdData{
    id?: any;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number|string;
  };
  quantity?:number
}


export interface IProductState {
    isLoadingFetch:boolean;
    isLoadingAdd:boolean;
    isLoadingUpdate:boolean;
    isLoadingDelete:boolean;
    productsData:ProdData[];
    isErrorFetch:boolean;
    isErrorAdd:boolean;
    isErrorUpdate:boolean;
    isErrorDelete:boolean;
}

export interface UserData{
  id?:any;
  username:string;
  email:string;
  password:string;
}

export interface IUserState{
  isLoading: boolean;
  isDeleteLoading: boolean;
  usersData: UserData[]; 
  isError: boolean;
  isDeleteError: boolean;
}

export interface CartData{
  id?: any;
  user_id: string;
  products: ProdData[];
}

export interface ICartState{
  isLoading: boolean,
  cartData:[],
  isError: boolean
}


export enum status{
  Pending="Pending",
  Inprogress="Inprogress",
  Success="Success"
}
export interface OrderData{

  userid: string;
  name:string;
  allProducts: ProdData[];
  totalAmount: number;
  address: [];
  date: string; 
  status: status;
  id?: any;
}

export interface IOrderState{
  isLoadingFetch :boolean,
  isLoadingUpdate :boolean,
  ordersData:OrderData[],
  isErrorFetch:boolean,
  isErrorUpdate:boolean
}