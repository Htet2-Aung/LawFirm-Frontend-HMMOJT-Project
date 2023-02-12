import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppointmentList from "../appointment/AppointmentList";

function AppTable() {
    return (
        <div className="ms-5 me-2">
            <div className="col-md-8 mb-3">
                <Link to="/appointment">Add</Link>
            </div>
            <div className="col-md-4">

            </div>
            <Table striped bordered hover variant="info">
                <thead className="text-center text-primary">
                    <th>Id</th>
                    <th>Name</th>
                    <th>ConsultantFees</th>
                    <th>LawyerStatus</th>
                    <th>ClientStatus</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    <AppointmentList />
                </tbody>
            </Table>
        </div>
        //     <div className="bg-primary container-fluid py-5">
        //     <div className="container">
        //         <div className="text-center mx-auto mb-5">
        //             <h1 className="text-primary display-4">Appointment List</h1>
        //         </div>
        //         <div className="row g-5">
        //         <AppointmentList/>
        //         </div>
        //         </div>
        // </div>
    );
}
export default AppTable;