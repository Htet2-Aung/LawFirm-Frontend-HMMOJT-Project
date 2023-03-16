
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePayment } from "./paymentSlice";


function PaymentItem(props){

    const dispatch = useDispatch()
    return(
        
        
        
                // <div class="col-lg-4 col-md-6">
                //     <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                //         <div class="service-icon mb-4">
                //             <i class="fa  fa-user-md text-white"></i>
                //         </div>
                //       {/* <h4 class="mb-2">CourtId : {props.id}</h4> */}
                //         <h5 class="mb-2">CardNumber : {props.cardNumber}</h5>
                //         <p class="mb-2">Expire Date : {props.expireDate}</p>
                //         <p class="mb-2">CVC : {props.cvc}</p>
                //         <p class="mb-2">HolderName : {props.holderName}</p>
                //         <p class="mb-2">Total Cost : {props.totalCost}</p>
                //         <p class="mb-2">Installment Type : {props.installmentType}</p>
                //         <a class="btn btn-lg btn-primary rounded-pill" href="">
                //             <i class="bi bi-arrow-right"></i>
                //         </a>
                //         <div >  
                //         <Link to={`/payment/edit/${props.id}`} >
                //         <button className="btn btn-success mx-3">Edit</button>
                //       </Link>
                //         <a onClick={()=>{dispatch(deletePayment(props.id))}}>
                //         <button className="btn btn-danger">Delete</button></a></div>
                //     </div>
                // </div>
               
                <tr id="data_table tr">
                     <td>{props.no}</td>
                     <td>{props.cardNumber}</td>
                     <td>{props.expireDate}</td>
                     <td>{props.cvc}</td>
                     <td>{props.holderName}</td>
                     <td>{props.totalCost}</td>
                     
                     <td className="text-center">
                         <Link to={`/payment/edit/${props.id}`} >
                            <button className="btn btn-success mx-3">View</button>
                        </Link>

                       
                        
                     </td>
                     
             </tr>
           
      
        );

}
export default PaymentItem;