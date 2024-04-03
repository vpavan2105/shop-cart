import { useEffect } from "react"
import { useAppDispatch } from "../../redux/utils/Product_Utils"
import { fetchDataProduct, fetchOrdersData, fetchUsersData } from "../../redux/actions/actionAdmin"
import DashBoardAdmin from "../../components/Admin/DashBoardAdmin";



const DashBoard = () => {
    const dispatch = useAppDispatch();
useEffect(()=>{
   dispatch(fetchDataProduct())
    dispatch(fetchOrdersData());
    dispatch(fetchUsersData());
    
},[])
  return (
    <div>
        
    <DashBoardAdmin/>
  
    </div>
  )
}

export default DashBoard
