import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import InqueryItem from "./InqueryItem";
import { fetchInquery, fetchInqueryAdmin, getInqueryStatus, selectAllInquery, selectInqueryByStatus } from "./inquerySlice";
import $, { each } from "jquery"
import { getToken, getUser } from "../auth/authSlice";
import { useParams } from "react-router-dom";
function ToDoInqueryList(){

    const dispatch = useDispatch()
    const token = useSelector(getToken)
    const inquerys = useSelector((state)=>selectInqueryByStatus(state,'NO_CREATE'))
    console.log("InqueryList SelectAll Inquery: "+inquerys)
    const inqueryStatus = useSelector(getInqueryStatus)
   console.log("In the InqueryList Token :"+token)
   const user = useSelector(getUser)

    useEffect(() => {
        setTimeout(() => {
           // $('#example').DataTable().destroy();
              $('#example').DataTable();
           },200);
        })
           
        
      
    
    useEffect(() => {
        console.log("Inquery Status Token"+token)
        console.log("Inquery Status Fist "+inqueryStatus)
      if(inqueryStatus === 'idle'){
            if(user.role === 'Admin'){
                dispatch(fetchInqueryAdmin())
            }else{
                if(token){
                    dispatch(fetchInquery(token))
                   }else{
                    console.log('Invalid Token')
                   }
          
            }
      }
               
        },[inqueryStatus,dispatch,token])

    
        let content;
        let index=1;

        if(inqueryStatus === 'loading'){
            content = (<p>Loading....</p>)
        }
        if(inqueryStatus === 'succeeded'){
           
            

            
        content = inquerys.map(
         
            (inquery) => (
                
                <InqueryItem
                no={index++}
                id={inquery.id}
                lawyerName={inquery.lawyerName}
                userName={user.role==="User"?user.accountName:inquery.username}
                phoneNo = {inquery.phoneNo}
                // description = {inquery.description}
                appointmentStatus={inquery.appointmentStatus}
                // userId = {inquery.user.id}
                />
            )
           
        );
        }

    return content;
    
}
export default ToDoInqueryList;