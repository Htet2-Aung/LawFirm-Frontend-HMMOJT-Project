import { Link } from "react-router-dom";
import AppointmentList from "../appointment/AppointmentList";
import $, { each } from "jquery"
import { useEffect } from "react";
import { fetchAppointmentAdmin, selectAllIAppointment } from "../appointment/appointmentSlice";
import { useDispatch, useSelector } from "react-redux";

function AppTable() {

    const appointment = useSelector(selectAllIAppointment);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAppointmentAdmin())
    }, [dispatch])


    useEffect(() => {
        setTimeout(() => {
            // $('#example').DataTable().destroy();
            $('#example').DataTable();
        }, 200);
    })

    return (
        <div className="row container-fluid">
            <div className="col-md-1"></div>
            <div className="col-md-11">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h4  className="text-center">Appointment List</h4>
                    <Link to="/inquery" className="text-primary">Back</Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="display" id="example" width="100%" cellspacing="0">
                            <thead className="text-center">
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>User Name</th>
                                    <th>Lawyer Name</th>
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
                            <tfoot className="text-center">
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>User Name</th>
                                    <th>Lawyer Name</th>
                                    <th>ConsultantFees</th>
                                    <th>LawyerStatus</th>
                                    <th>ClientStatus</th>
                                    <th>Date</th>
                                    <th>Time</th>
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
export default AppTable;