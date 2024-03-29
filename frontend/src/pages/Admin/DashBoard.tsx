import { useEffect } from "react"
import { useAppDispatch } from "../../utils/Admin/adminUtils"
import { fetchDataProduct, fetchOrdersData, fetchUsersData } from "../../redux/action"
import DashBoardAdmin from "../../components/Admin/DashBoardAdmin"

const DashBoard = () => {
    const dispatch = useAppDispatch();
useEffect(()=>{
    dispatch(fetchOrdersData());
    dispatch(fetchUsersData());
    dispatch(fetchDataProduct())
},[])
  return (
    <div>
    <DashBoardAdmin/>
    </div>
  )
}

export default DashBoard
