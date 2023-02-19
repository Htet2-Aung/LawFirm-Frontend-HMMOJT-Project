import { Link } from "react-router-dom";
import ContractList from "../contract/ContractList";

function ConTable() {
    return (
        <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                    <Link to="/appointment">Back</Link>

                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Description</th>
                                    <th>Date</th>
                                    <th>Case</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ContractList />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>



    );
}
export default ConTable;