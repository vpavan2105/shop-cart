
import { useEffect } from "react"
import { UsersList } from "../../components/Admin/UsersList"
import { useAppDispatch } from "../../redux/utils/Product_Utils";
import { fetchUsersData } from "../../redux/actions/actionAdmin";

const UsersAdmin = () => {
  const dispatch = useAppDispatch();
  useEffect(()=>{
     dispatch(fetchUsersData());
  },[])
  return (
    <div>
      <UsersList/>
    </div>
  )
}

export  {UsersAdmin}
