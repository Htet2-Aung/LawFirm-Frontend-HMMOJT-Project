import React from "react";
import { Link } from "react-router-dom";
function CreatePaymentButton(){
    return (
        
        <React.Fragment>
        
             <Link to='/payment/create' className="btn btn-lg btn-info">
                        Create Payment
             </Link>
             
        </React.Fragment>
    );

}
export default CreatePaymentButton