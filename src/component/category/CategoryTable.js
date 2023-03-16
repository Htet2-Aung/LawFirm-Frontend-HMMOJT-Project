import { useEffect } from "react";
import { useDispatch } from "react-redux";
import $ from "jquery"
import { Link } from "react-router-dom";
import { fetchCategories } from "./categorySlices";
import CategoryList from "./CategoryList";





function CategoryTable() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategories())
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
                    <h4 className="text-center">Category List</h4>
                   
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="display" id="example" width="100%" cellspacing="0">
                            <thead className="text-center">
                                <tr>
                                    <th>No.</th>
                                    <th>Category Name</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>

                            </thead>
                            <tbody>
                                <CategoryList />
                            </tbody>
                            <tfoot className="text-center">
                            <tr>
                                <th>No.</th>
                                <th>Category Name</th>
                                <th>Description</th>
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


export default CategoryTable;