import { useEffect } from "react";
import { useDispatch } from "react-redux";
import $ from "jquery"
import { Link } from "react-router-dom";
import { fetchCourts } from "./courtSlices";
import CourtList from "./CourtList";





function CourtTable() {

   const dispatch = useDispatch()

   useEffect(()=>{
    dispatch(fetchCourts())
   },[dispatch])

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
                    <h4 className="text-center">Court List</h4>
                  


                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="display" id="example" width="100%" cellspacing="0">
                            <thead className="text-center">
                                <tr>
                                    <th>No.</th>
                                    <th>Court Name</th>
                                    <th>Address</th>
                                    <th>Township</th>
                                    <th>City</th>
                                    <th>Action</th>
                                </tr>

                            </thead>
                            <tbody>
                                <CourtList />
                            </tbody>
                            <tfoot className="text-center">
                            <tr>
                                    <th>No.</th>
                                    <th>Court Name</th>
                                    <th>Address</th>
                                    <th>Township</th>
                                    <th>City</th>
                                    <th>Action</th>
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


export default CourtTable;