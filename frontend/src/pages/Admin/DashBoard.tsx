import { useEffect } from "react"
import { useAppDispatch } from "../../redux/utils/adminUtils"
import { fetchDataProduct, fetchOrdersData, fetchUsersData } from "../../redux/actions/actionAdmin"
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
