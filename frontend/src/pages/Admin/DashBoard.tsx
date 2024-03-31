import { useEffect } from "react"
import { useAppDispatch } from "../../redux/utils/Product_Utils"
import { fetchDataProduct, fetchOrdersData, fetchUsersData } from "../../redux/actions/actionAdmin"


const DashBoard = () => {
    const dispatch = useAppDispatch();
useEffect(()=>{
    dispatch(fetchOrdersData());
    dispatch(fetchUsersData());
    dispatch(fetchDataProduct())
},[])
  return (
    <div>
    {/* <DashBoardAdmin/> */}
    <h2>demo dashboard</h2>
    </div>
  )
}

export default DashBoard
