import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import InqueryItem from "./InqueryItem";
import { fetchInquery, fetchInqueryAdmin, getInqueryStatus, selectAllInquery, selectInqueryByLawyerName, selectInqueryByStatus, selectInqueryByUsername } from "./inquerySlice";
import $, { each } from "jquery"
import { getToken, getUser } from "../auth/authSlice";
import { useParams } from "react-router-dom";
function InqueryList(){

    const dispatch = useDispatch()
    const token = useSelector(getToken)
    const inquerysAll = useSelector(selectAllInquery)
    console.log("InqueryList SelectAll Inquery: "+inquerysAll)
    const inqueryStatus = useSelector(getInqueryStatus)
   console.log("In the InqueryList Token :"+token)
   const user = useSelector(getUser)
   console.log("In the inquery List : user is"+user.username)
   const inqueryUsername=useSelector((state)=>selectInqueryByUsername(state,user.username))
   console.log("In the inquery List , inquery by user name is"+inqueryUsername);
   const inqueryLawyername=useSelector((state)=>selectInqueryByLawyerName(state,user.username))
   console.log("In the inquery List , inquery by user name is"+inqueryUsername);


    useEffect(() => {
        setTimeout(() => {
           // $('#example').DataTable().destroy();
              $('#example').DataTable();
           },200);
        })
           
        
      
    
    useEffect(()=>{
        if(inqueryStatus === 'idle'){
            dispatch(fetchInqueryAdmin())

        }   
            
            
        
    },[dispatch]);

    
        let content;
        let index=1;

        if(inqueryStatus === 'loading'){
            content = (<p>Loading....</p>)
        }
        if(inqueryStatus === 'succeeded'){
           
        let inquerys;
        if(user.role==="Admin")        
            inquerys=inquerysAll;
        else if(user.role==="User")
            inquerys=inqueryUsername;
        else
            inquerys=inqueryLawyername;

            
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
export default InqueryList;