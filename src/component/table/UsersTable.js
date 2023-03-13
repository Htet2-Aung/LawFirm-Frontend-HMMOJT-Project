import UserList from "../user/UserList";
import $ from "jquery"
import { useEffect } from "react";
import { Link } from "react-router-dom";

function UsersTable() {
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
                        <Link to="/user/create" className="text-primary">Add Lawyer</Link>
                    </div>


                    <div className="card-body">
                        <div className="row table-responsive">
                            <table className="display" id="example" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        {/* <th>FirstName</th>
                            <th>MiddleName</th>
                            <th>LastName</th> */}
                                        <th>Image</th>
                                        <th>ProfileName</th>
                                        <th>Role</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        {/* 
                            <th>NRC</th>
                            <th>Phone No</th>
                            <th>Cost</th>
                            <th>Status</th>
                            <th>License No</th>
                            <th>License Expire Date</th>
                            <th>Password</th>
                            <th>Field</th>
                            <th>Description</th>
                            <th>Certificate</th> */}
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <UserList />
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Id</th>
                                        <th>Image</th>
                                        {/* <th>FirstName</th>
                            <th>MiddleName</th>
                            <th>LastName</th> */}
                                        <th>ProfileName</th>
                                        <th>Role</th>
                                        <th>Email</th>
                                        {/* <th>Address</th>
                            <th>NRC</th>
                            <th>Phone No</th>
                            <th>Role</th>
                            <th>Cost</th>
                            <th>Status</th>
                            <th>License No</th>
                            <th>License Expire Date</th>
                            <th>Password</th>
                            <th>Field</th>
                            <th>Description</th>
                            <th>Certificate</th> */}
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
export default UsersTable;