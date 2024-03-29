import { useEffect } from "react"
import { UsersList } from "../../components/Admin/UsersList"
import { useAppDispatch } from "../../utils/Admin/adminUtils"
import { fetchUsersData } from "../../redux/action";


const UsersAdmin = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(fetchUsersData())
    },[])
  return (
    <div>
      <UsersList/>
    </div>
  )
}

export  {UsersAdmin}
