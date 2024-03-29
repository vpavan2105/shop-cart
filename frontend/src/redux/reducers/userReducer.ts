import { IUserState } from "../utils/adminUtils"
import { DeleteUser, FetchUsers } from "../actionTypes"

const initialState : IUserState = {
    isLoading: false,
    isDeleteLoading: false,
    usersData:[],
    isError: false,
    isDeleteError: false
}

export const userReducer = (state:IUserState = initialState , {type, payload}:any):IUserState => {

    switch(type){
        case FetchUsers.FETCH_USERS_LOADING : return {...state,isLoading:true}
        case FetchUsers.FETCH_USERS_SUCCESS :return {...state,isLoading:false,usersData:payload}
        case FetchUsers.FETCH_USERS_ERROR : return {...state,isError:true,isLoading:false}
        case DeleteUser.DELETE_USER_LOADING : return {...state,isDeleteLoading:true}
        case DeleteUser.DELETE_USER_SUCCESS :return {...state,isDeleteLoading:false,usersData:
                                                        state.usersData.filter((user)=>user.id != payload )
                                                    }
        case DeleteUser.DELETE_USER_ERROR : return {...state,isDeleteLoading:false,isDeleteError:true}
        default: return state
    }
}