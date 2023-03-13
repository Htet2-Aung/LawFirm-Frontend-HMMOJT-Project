import { useEffect } from "react";
import $, { each } from "jquery"
import PaymentList from "./PaymentList";
import { Link } from "react-router-dom";
function PaymentTable(){
    useEffect(() => {
        setTimeout(() => {
           // $('#example').DataTable().destroy();
              $('#example').DataTable();
           },200);
        })

        return (

            <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    
                    <Link to="/contract" className="text-primary">Back</Link>
                    
    
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="display" id="example" width="100%" cellspacing="0">
                            <thead className="text-center">
                                <tr>
                                    <th>No.</th>
                                    <th>Card Number</th>
                                    <th>Expire Date</th>
                                    <th>CVC</th>
                                    <th>holderName</th>
                                    <th>totalCost</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <PaymentList />
                            </tbody>
                            <tfoot className="text-center">
                                <tr>
                                    <th>No.</th>
                                    <th>Card Number</th>
                                    <th>Expire Date</th>
                                    <th>CVC</th>
                                    <th>holderName</th>
                                    <th>totalCost</th>
                                    <th>Actions</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
    
        </div>
        );
}
export default PaymentTable;