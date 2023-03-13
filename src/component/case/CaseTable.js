import CaseList from "./CaseList";
//import SearchBar from "../utility/SearchBar";
import { fetchCases } from "./casesSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import $ from "jquery"
import { Link } from "react-router-dom";





function CaseTable() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCases())
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
        <div className="col-md-10">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h4 className="text-center">Case List</h4>
                    <Link to="/contract" className="text-primary">Back</Link>


                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="display" id="example" width="100%" cellspacing="0">
                            <thead className="text-center">
                                <tr>
                                    <th>No.</th>
                                    <th>Title</th>
                                    <th>User Name</th>
                                    <th>Lawyer Name</th>
                                    <th>Attendent</th>
                                    <th>Case Status</th>
                                    <th>Description</th>
                                    <th>Start Date and Time</th>
                                    <th>End Date and Time</th>
                                    <th>Actions</th>
                                </tr>

                            </thead>
                            <tbody>
                                <CaseList />
                            </tbody>
                            <tfoot className="text-center">
                                <tr>
                                    <th>No.</th>
                                    <th>Title</th>
                                    <th>User Name</th>
                                    <th>Lawyer Name</th>
                                    <th>Attendent</th>
                                    <th>Case Status</th>
                                    <th>Description</th>
                                    <th>Start Date and Time</th>
                                    <th>End Date and Time</th>
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


export default CaseTable;