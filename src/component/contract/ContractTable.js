import { Link } from "react-router-dom";
import $, { each } from "jquery"
import { useEffect } from "react";
import ContractList from "./ContractList";

function ContractTable() {
    useEffect(() => {
        setTimeout(() => {
            // $('#example').DataTable().destroy();
            $('#example').DataTable();
        }, 200);
    })

    return (

        <div className="row container-fluid">
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h4 className="text-center">Contract List</h4>
                        <Link to="/appointment" className="text-primary">Back</Link>


                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="display" id="example" width="100%" cellspacing="0">
                                <thead className="text-center">
                                    <tr>
                                        <th>No.</th>
                                        <th>Contract Date</th>
                                        <th>User Name</th>
                                        <th>Lawyer Name</th>
                                        <th>Description</th>
                                        <th>Case Status</th>
                                        <th>Paid Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ContractList />
                                </tbody>
                                <tfoot className="text-center">
                                    <tr>
                                        <th>No.</th>
                                        <th>Contract Date</th>
                                        <th>User Name</th>
                                        <th>Lawyer Name</th>
                                        <th>Description</th>
                                        <th>Case Status</th>
                                        <th>Paid Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col-md-1"></div>

        </div>








    );
}
export default ContractTable;