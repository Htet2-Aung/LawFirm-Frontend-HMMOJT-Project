import { useEffect } from "react";
import $ from "jquery"
import { fetchInqueryAdmin, selectAllInquery } from "../inquery/inquerySlice";
import { useDispatch, useSelector } from "react-redux";
import ToDoInqueryList from "../inquery/ToDoInqueryList";


function ToDoInqTable() {

    const inquery = useSelector(selectAllInquery);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchInqueryAdmin())
    }, [dispatch])

    console.log("in the inquery table :" + inquery)

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
            <div className=" card shadow mb-4">
                <div className="card-header py-3">

                    <h5 className="card-title">Inquiry List</h5>


                </div>
                <div className="card-body">
                    <div className=" table-responsive">
                        <table id="example" className="display">
                            <thead className="text-center">
                                <tr class="header">
                                    <th>No</th>
                                    <th>Lawyer Name</th>
                                    <th>User Name</th>
                                    <th>Phone No</th>
                                    <th>Appointment </th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>No</th>
                                    <th>Lawyer Name</th>
                                    <th>User Name</th>
                                    <th>Phone No</th>
                                    <th>Appointment </th>
                                    <th>Actions</th>
                                </tr>
                            </tfoot>
                            <tbody >
                                <ToDoInqueryList />

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-md-1"></div>
          

        </div>



    );
}
export default ToDoInqTable;
