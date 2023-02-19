import { Link } from "react-router-dom";
import AppointmentList from "../appointment/AppointmentList";

function AppTable() {
    return (
        <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                    <Link to="/inquery" className="text-primary">Back</Link>

                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>ConsultantFees</th>
                                    <th>LawyerStatus</th>
                                    <th>ClientStatus</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <AppointmentList />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>


    );
}
export default AppTable;