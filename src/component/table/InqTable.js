
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import InqueryList from "../inquery/InqueryList";

function InqTable() {
    return (
        <div className="ms-3 me-2">
            <div className="col-md-8 mb-3">
                <Link to="/inquery">Add</Link>
            </div>
            <div className="col-md-4">

            </div>
            <Table striped bordered hover variant="primary" ms-5>
                <thead className="text-center text-primary">
                    <th>Id</th>
                    <th>Lawyer</th>
                    <th>User PhoneNo</th>
                    <th>Description</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    <InqueryList />
                </tbody>
            </Table>
        </div>

        //     <div className="container-fluid py-5">
        //     <div className="container">
        //         <div className="text-center mx-auto mb-5">
        //             <h1 className="text-primary display-4">Inquery List</h1>
        //         </div>
        //         <div className="row g-5">
        //         <InqueryList/>
        //         </div>
        //         </div>
        // </div>
    );
}
export default InqTable;