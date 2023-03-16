import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getError, getToken, getUser } from "../auth/authSlice";
import PaymentItem from "./PaymentItem";
import { selectAllPayments,getPaymentError,getPaymentStatus,fetchPayments, selectPaymentByUsername, selectPaymentByLawyerName } from "./paymentSlice";

function PaymentList(){

    const dispatch = useDispatch()
    const token = useSelector(getToken)
   console.log("In the payment List Token :"+token)
   const user = useSelector(getUser)
   console.log("In the payment List : user is"+user.username)
    const error = useSelector(getError)

   const paymentStatus = useSelector(getPaymentStatus)
   console.log("In the PaymentStatus List : appointmetn status is"+ paymentStatus)

   const paymentsAll = useSelector(selectAllPayments)
    console.log("Payment List SelectAll Payment: "+paymentsAll)
   const paymentsUsername=useSelector((state)=>selectPaymentByUsername(state,user.username))
//    console.log("In the appointmet List , appointmentsUsername by user name is"+appointmentsUsername);
   const paymentsLawyername=useSelector((state)=>selectPaymentByLawyerName(state,user.username))
//    console.log("In the inquery List , appointmentsLawyername is"+appointmentsLawyername);
    useEffect(()=>{
        if(paymentStatus === 'idle'){
            dispatch(fetchPayments())
        }
    },[paymentStatus,dispatch]
    );

    let content, payments;
    let index=1;
    if(user.role==='Admin')
        payments=paymentsAll
    else if(user.role==='User')
        payments=paymentsUsername
    else
        payments=paymentsLawyername
    
    

    if(paymentStatus === 'loading'){
        content = (<p>Loading......</p>)
    }

    console.log("In the payment List"+paymentStatus)
    if(paymentStatus === 'succeeded'){
        
        content = payments.map(
            (payment)=>(
                
                    <PaymentItem
                    no ={index++}
                    id = {payment.id}
                    cardNumber = {payment.cardNumber}
                    expireDate = {payment.expireDate}
                    cvc = {payment.cvc}
                    holderName = {payment.holderName}
                    totalCost = {payment.totalCost}

                   
                  
                    />)
                   
    
    
                );
            }
        
    
    if(paymentStatus === 'failed'){
        content = (<p>{error}</p>)
    }

        
   

  
    return content;

}
export default PaymentList